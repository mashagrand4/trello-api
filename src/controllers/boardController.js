import BoardService from "../services/boardService";

export default class Board {
    static async getAllBoards(req, res, next) {
        try {
            res.send(await BoardService.getAllBoards());
        } catch (error) {
            next(error);
        }
    };

    static async getBoardByName(req, res, next) {
        const {boardName} = req.body;
        try {
            res.send(await BoardService.getBoardByName(boardName));
        } catch (error) {
            next(error);
        }
    };

    static async createBoard(req, res, next) {
        const board = req.body;
        try {
            res.send(await BoardService.createBoard(board));
        } catch (error) {
            next(error);
        }
    };

    static async updateBoard(req, res, next) {
        const board = req.body;
        try {
            res.send(await BoardService.updateBoard(board));
        } catch (error) {
            next(error);
        }
    };

    static async deleteBoard(req, res, next) {
        const {boardName} = req.body;
        try {
            await BoardService.deleteBoard(boardName);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    };
}