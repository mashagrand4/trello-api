import Board from "../db/board/board";

export default class BoardService {
    static createBoard(board) {
        Board.createBoard(board);
    }
}