import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../node_modules/@autobe/playground-ui/dist`,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
