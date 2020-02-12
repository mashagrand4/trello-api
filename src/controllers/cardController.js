import CardService from "../services/cardService";

export default class Card {
    static async getAllCards(req, res, next) {
        const {boardName} = req.query;
        try {
            res.send(await CardService.getAllCards(boardName));
        } catch (error) {
            next(error);
        }

    };

    static async createCard(req, res, next) {
        const card = req.body;
        try {
            res.send(await CardService.createCard(card));
        } catch (error) {
            next(error);
        }
    };

    static async updateCard(req, res, next) {
        const card = req.body;
        try {
            res.send(await CardService.updateCard(card));
        } catch (error) {
            next(error);
        }
    };

    static async deleteCard(req, res, next) {
        const {cardName} = req.body;
        try {
            res.sendStatus(await CardService.deleteCard(cardName));
        } catch (error) {
            next(error);
        }
    };
}