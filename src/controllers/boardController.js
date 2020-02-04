import BoardService from "../services/boardService";

export default class Board {
    static async getAllBoards(req, res, next) {
        try {
            const boards = await BoardService.getAllBoards();
            res.send(boards);
        } catch (error) {
            next(error);
        }

    };

    static async getBoardByName(req, res, next) {
        const {boardName} = req.body;
        try {
            const board = await BoardService.getBoardByName(boardName);
            res.send(board);
        } catch (error) {
            next(error);
        }
    };

    static async createBoard(req, res, next) {
        const {board} = req.body;
        try {
            const status = await BoardService.createBoard(board);
            res.send(status);
        } catch (error) {
            next(error);
        }
    };

    static async updateBoard(req, res, next) {
        const {board} = req.body;
        try {
            const board = await BoardService.updateBoard(board);
            res.send(board);
        } catch (error) {
            next(error);
        }
    };

    static async deleteBoard(req, res, next) {
        const {boardName} = req.body;
        try {
            const board = await BoardService.deleteBoard(boardName);
            res.send(board);
        } catch (error) {
            next(error);
        }
    };
}