import Card from "../repositories/card";

export default class CardService {
    static getAllCards() {
        return Card.getAllCards();
    }

    static async createCard(boardName, card) {
        return await Card.createCard(boardName, card);
    }

    static async updateCard(card) {
        return await Card.updateCard(card);
    }

    static async deleteCard(cardName) {
        return await Card.deleteCard(cardName);
    }
}