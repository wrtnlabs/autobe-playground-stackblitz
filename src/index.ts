import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { WebSocketAdaptor } from "@nestia/core";

const main = async (): Promise<void> => {
  const app: INestApplication = await NestFactory.create(AppModule);
  await WebSocketAdaptor.upgrade(app);
  await app.listen(443, "0.0.0.0");

  console.log("");
  console.log("Application is running");
  console.log("");
  console.log("  - http://127.0.0.1:443");
  console.log("  - http://localhost:443");
};
main().catch(console.error);
