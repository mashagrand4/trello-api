import LoggerService from '../services/loggerService';
import BoardService from "../services/boardService";
const logger = new LoggerService('app');

export default class Board {
    static async getAllBoards(req, res) {
        await logger.info("Request received at /test", req.body);
        BoardService.createBoard(req.body);
        res.send('get all boards');
    };

    static getBoardById(req, res) {
        res.send('get board by id');
    };

    static createBoard(req, res) {
        res.send('create board');
    };

    static updateBoard(req, res) {
        res.send('update board');
    };

    static deleteBoard(req, res) {
        res.send('delete board');
    };
}