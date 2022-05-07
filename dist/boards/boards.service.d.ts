import { BoardReposiory } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";
import { Board } from "./board.entity";
import { BoardStatus } from "./board-status.enum";
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: BoardReposiory);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    deleteBoardById(id: number): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}
