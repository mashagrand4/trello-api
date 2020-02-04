import Card from "../repositories/card";
import Board from "../repositories/board";

export default class CardService {
    static getAllCards() {
        return Card.getAllCards();
    }

    static async createCard(boardName, card) {
        const cardToCreate = {
            ...card,
            boardName
        };
        return await Card.createCard(cardToCreate);
    }

    static async updateCard(card) {
        return await Card.updateCard(card);
    }

    static async deleteCard(cardName) {
        return await Card.deleteCard(cardName);
    }
}