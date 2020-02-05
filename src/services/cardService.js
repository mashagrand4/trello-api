import Card from "../repositories/card";

export default class CardService {
    static getAllCards() {
        return Card.getAllCards();
    }

    static createCard(boardName, card) {
        const cardToCreate = {
            ...card,
            boardName
        };
        return Card.createCard(cardToCreate);
    }

    static updateCard(card) {
        return Card.updateCard(card);
    }

    static deleteCard(cardName) {
        return Card.deleteCard(cardName);
    }
}