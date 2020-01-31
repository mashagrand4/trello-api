import LoggerService from '../services/loggerService';
import BoardService from "../services/boardService";
const logger = new LoggerService('app');

export default class Board {
    static async getAllBoards(req, res) {
        try {
            const boards = await BoardService.getAllBoards();
            res.send(boards);
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }

    };

    static async getBoardByName(req, res) {
        try {
            const board = await BoardService.getBoardByName(req.query);
            res.send(board);
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };

    static async createBoard(req, res) {
        try {
            const board = await BoardService.createBoard(req.body);
            res.send(board);
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };

    static async updateBoard(req, res) {
        try {
            const board = await BoardService.updateBoard(req.body);
            res.send(board);
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };

    static async deleteBoard(req, res) {
        try {
            const board = await BoardService.deleteBoard(req.query);
            res.send(board);
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };
}