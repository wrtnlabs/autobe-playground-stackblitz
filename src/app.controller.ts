import { AutoBeAgent } from "@autobe/agent";
import {
  IAutoBeCompiler,
  IAutoBeRpcHeader,
  IAutoBeRpcListener,
  IAutoBeRpcService,
} from "@autobe/interface";
import { AutoBeRpcService } from "@autobe/rpc";
import { Controller } from "@nestjs/common";
import { WebSocketRoute } from "@nestia/core";
import { ILlmSchema } from "@samchon/openapi";
import fs from "fs";
import OpenAI from "openai";
import path from "path";
import { WebSocketAcceptor, WorkerConnector } from "tgrid";
import { VariadicSingleton } from "tstl";

@Controller()
export class AppController {
  @WebSocketRoute()
  public async chat(
    @WebSocketRoute.Acceptor()
    acceptor: WebSocketAcceptor<
      IAutoBeRpcHeader<ILlmSchema.Model>,
      IAutoBeRpcService,
      IAutoBeRpcListener
    >
  ): Promise<void> {
    // PREPARE COMPILER
    const compiler: WorkerConnector<null, null, IAutoBeCompiler> =
      new WorkerConnector(null, null, "process");
    await compiler.connect(
      `${__dirname}/compiler.${path.extname(__filename).slice(1)}`
    );

    // COMPOSE AGENT
    const agent = new AutoBeAgent({
      model: acceptor.header.model,
      vendor: {
        api: new OpenAI({
          apiKey: acceptor.header.vendor.apiKey,
          baseURL: acceptor.header.vendor.baseURL,
        }),
        model: acceptor.header.vendor.model,
      },
      config: {
        locale: acceptor.header.locale,
        timezone: acceptor.header.timezone,
      },
      compiler: compiler.getDriver(),
    });

    // EVENT LISTENERS
    const archive = () =>
      save({
        files: agent.getFiles(),
        root: `${__dirname}/../result`,
      });
    agent.on("analyzeComplete", archive);
    agent.on("prismaComplete", archive);
    agent.on("interfaceComplete", archive);
    agent.on("testComplete", archive);
    agent.on("realizeComplete", archive);

    // ACCEPT CONNECTION
    await acceptor.accept(
      new AutoBeRpcService({
        agent,
        listener: acceptor.getDriver(),
      })
    );
  }
}

const save = async (props: {
  root: string;
  files: Record<string, string>;
}): Promise<void> => {
  if (fs.existsSync(props.root))
    await fs.promises.rm(props.root, {
      recursive: true,
    });

  const directory = new VariadicSingleton(async (location: string) => {
    try {
      await fs.promises.mkdir(location, {
        recursive: true,
      });
    } catch {}
  });
  for (const [key, value] of Object.entries(props.files)) {
    const file: string = path.resolve(props.root, key);
    await directory.get(path.dirname(file));
    await fs.promises.writeFile(file, value, "utf8");
  }
};
