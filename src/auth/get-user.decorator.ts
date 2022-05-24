import { User } from "src/auth/user.entity";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  }
);