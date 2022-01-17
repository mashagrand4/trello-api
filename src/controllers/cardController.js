import CardService from "../services/cardService";

export default class Card {
    static async getAllCards(req, res, next) {
        try {
            res.send(await CardService.getAllCards());
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
            await CardService.deleteCard(cardName);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    };
}