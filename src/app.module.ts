import { DynamicModule, Module } from "@nestjs/common";
import { BoardsModule } from "./boards/boards.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./configs/typeorm.configs";
import { AuthModule } from "./auth/auth.module";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
