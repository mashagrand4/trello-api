import LoggerService from '../services/loggerService';
import CardService from "../services/cardService";
const logger = new LoggerService('app');

export default class Card {
    static async getAllCards(req, res) {
        try {
            const {boardName} = req.query;
            res.send(await CardService.getAllCards(boardName));
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }

    };

    static async createCard(req, res) {
        try {
            console.log(req);
            const {boardName = ''} = req.query;
            const card = req.body;
            res.send(await CardService.createCard(boardName, card));
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };

    static async updateCard(req, res) {
        try {
            const card = req.body;
            res.send(await CardService.updateCard(card));
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };

    static async deleteCard(req, res) {
        try {
            const {cardName} = req.query;
            res.send(await CardService.deleteCard(cardName));
        } catch (error) {
            res.status(400).json(error);
            await logger.error(error);
        }
    };
}