import { Board, BoardStatus } from "./board.model";
export declare class BoardsService {
    private boards;
    getAllBoards(): Board[];
    createBoard(createBoardDto: any): Board;
    getBoardById(id: string): Board;
    deleteBoardById(id: string): void;
    updateBoardStatus(id: string, status: BoardStatus): Board;
}
