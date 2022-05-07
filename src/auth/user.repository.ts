import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";

import * as bcrypt from "bcryptjs";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const salt: string = await bcrypt.genSalt();

    const hashedPassword: string = await bcrypt.hash(
      authCredentialDto.password,
      salt
    );
    const user: User = this.create({
      username: authCredentialDto.username,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === "233505") {
        throw new ConflictException("Existing username");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async deleteUser(id: number) {
    this.delete(id);
  }
}
