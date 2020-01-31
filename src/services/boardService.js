import Board from "../repositories/board";

export default class BoardService {
    static getAllBoards() {
        return Board.getAllBoards();
    }

    static async getBoardByName(boardName) {
        return await Board.getBoardByName(boardName);
    }

    static async createBoard(board) {
        return await Board.createBoard(board);
    }


    static async updateBoard(boardName) {
        return await Board.updateBoard(boardName);
    }

    static async deleteBoard(boardName) {
        return await Board.deleteBoard(boardName);
    }
}