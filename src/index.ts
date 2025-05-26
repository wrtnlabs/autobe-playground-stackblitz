import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { WebSocketAdaptor } from "@nestia/core";

const main = async (): Promise<void> => {
  const app: INestApplication = await NestFactory.create(AppModule);
  await WebSocketAdaptor.upgrade(app);
  await app.listen(443, "0.0.0.0");
};
main().catch(console.error);
