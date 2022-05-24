import { User } from "src/auth/user.entity";
import { Repository } from "typeorm";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
export declare class BoardReposiory extends Repository<Board> {
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
}
