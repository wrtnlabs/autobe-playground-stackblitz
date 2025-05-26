import { IAutoBeCompiler, IAutoBeRpcHeader } from "@autobe/interface";
import express from "express";
import { ILlmSchema } from "@samchon/openapi";
import OpenAI from "openai";
import path from "path";
import { WorkerConnector } from "tgrid";
import { AutoBePlaygroundServer } from "@autobe/playground-server";
import { AutoBeAgent } from "@autobe/agent";
import { AutoBeCompiler } from "@autobe/compiler";

const server = async () => {
  const compiler: WorkerConnector<null, null, IAutoBeCompiler> =
    new WorkerConnector(null, null, "process");
  await compiler.connect(
    `${__dirname}/compiler.${path.extname(__filename).slice(1)}`
  );

  const server: AutoBePlaygroundServer<IAutoBeRpcHeader<ILlmSchema.Model>> =
    new AutoBePlaygroundServer({
      predicate: async (acceptor) => ({
        type: "accept",
        cwd: path.resolve(`${__dirname}/../result`),
        agent: new AutoBeAgent({
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
          compiler: new AutoBeCompiler(),
        }),
      }),
    });
  await server.open(443);
};

const application = () => {
  const app: express.Express = express();
  app.use(
    "/",
    express.static(`${__dirname}/../node_modules/@autobe/playground-ui/dist`)
  );
  app.listen(3000);
};

const main = async () => {
  // await server();
  server;
  application();

  console.log("AutoBe Playground server is running on port 3000");
  console.log("");
  console.log("http://127.0.0.1:3000");
  console.log("http://localhost:3000");
};
main().catch(console.error);
