import Board from "../db/board/board";

export default class BoardService {
    static async getAllBoards() {
        return await Board.getAllBoards();
    }

    static createBoard(board) {
        Board.createBoard(board);
    }
}