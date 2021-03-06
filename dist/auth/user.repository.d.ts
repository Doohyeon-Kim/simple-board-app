import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UserRepository extends Repository<User> {
    createUser(authCredentialDto: AuthCredentialDto): Promise<void>;
    deleteUser(id: number): Promise<void>;
}
