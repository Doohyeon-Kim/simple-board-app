import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { AuthService } from "./auth.service";
import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/sign-up")
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto
  ): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post("/sign-in")
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Delete("/:id")
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.authService.deleteUserById(id);
  }
}
