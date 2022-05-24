import { BoardReposiory } from "./board.repository";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { v1 as uuid } from "uuid";
import { CreateBoardDto } from "./dto/create-board.dto";
import { Board } from "./board.entity";
import { BoardStatus } from "./board-status.enum";
import { DeleteResult } from "typeorm";
import { User } from "src/auth/user.entity";

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardReposiory)
    private boardRepository: BoardReposiory
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async getBoardById(id: number): Promise<Board> {
    const found: Board = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User
  ): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    const result: DeleteResult = await this.boardRepository.delete({
      id,
      user,
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    console.log("result", result);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board: Board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
}

// getAllBoards(): Board[] {
//   return this.boards;
// }

// createBoard(createBoardDto: CreateBoardDto): Board {
//   const board: Board = {
//     id: uuid(),
//     title: createBoardDto.title,
//     description: createBoardDto.description,
//     status: BoardStatus.PUBLIC
//   };
//   this.boards.push(board);
//   return board;
// }

// getBoardById(id: string): Board {
//   const found: Board = this.boards.find((board) => board.id === id);
//   if (!found) {
//     throw new NotFoundException(`Can't find Board with id ${id}` );
//   }
//   return found;
// }

// deleteBoardById(id: string): void {
//   const found: Board = this.getBoardById(id);
//   this.boards = this.boards.filter((board) => board.id !== found.id);
// }

// updateBoardStatus(id: string, status: BoardStatus): Board {
//   const board: Board = this.getBoardById(id);
//   board.status = status;
//   return board;
// }
//
