import Board from "../repositories/board";

export default class BoardService {
    static getAllBoards() {
        return Board.getAllBoards();
    }

    static getBoardByName(boardName) {
        return Board.getBoardByName(boardName);
    }

    static createBoard(board) {
        const boardToCreate = {
            ...board,
            create_at: Date.now(),
            cards: [],
        };
        return Board.createBoard(boardToCreate);
    }

    static updateBoard(boardName) {
        return Board.updateBoard(boardName);
    }

    static deleteBoard(boardName) {
        return Board.deleteBoard(boardName);
    }
}