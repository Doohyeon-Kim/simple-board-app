import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { AuthService } from "./auth.service";
import { User } from "./user.entity";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialDto: AuthCredentialDto): Promise<void>;
    signIn(authCredentialDto: AuthCredentialDto): Promise<{
        accessToken: string;
    }>;
    deleteUser(id: number): Promise<void>;
    test(user: User): void;
}
