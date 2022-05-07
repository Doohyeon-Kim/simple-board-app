import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { UserRepository } from "./user.repository";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";

import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }

  async signIn(
    authCredentialDto: AuthCredentialDto
  ): Promise<{ accessToken: string }> {
    const user: User = await this.userRepository.findOne({
      username: authCredentialDto.username,
    });

    if (
      user &&
      (await bcrypt.compare(authCredentialDto.password, user.password))
    ) {
      const payload: { username: string } = {
        username: authCredentialDto.username,
      };
      // Secrtet + Payload로 토큰생성
      const accessToken: string = await this.jwtService.sign(payload);

      return { accessToken: accessToken };
    } else {
      throw new UnauthorizedException("login failed");
    }
  }

  async deleteUserById(id: number): Promise<void> {
    return this.userRepository.deleteUser(id);
  }
}
