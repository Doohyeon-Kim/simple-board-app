"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardReposiory = void 0;
const typeorm_1 = require("typeorm");
const board_status_enum_1 = require("./board-status.enum");
const board_entity_1 = require("./board.entity");
let BoardReposiory = class BoardReposiory extends typeorm_1.Repository {
    async createBoard(createBoardDto, user) {
        const { title, description } = createBoardDto;
        const board = await this.create({
            title,
            description,
            status: board_status_enum_1.BoardStatus.PUBLIC,
            user: user,
        });
        await this.save(board);
        return board;
    }
};
BoardReposiory = __decorate([
    (0, typeorm_1.EntityRepository)(board_entity_1.Board)
], BoardReposiory);
exports.BoardReposiory = BoardReposiory;
//# sourceMappingURL=board.repository.js.map