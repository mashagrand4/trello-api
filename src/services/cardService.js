import Card from "../repositories/card";

export default class CardService {
    static getAllCards() {
        return Card.getAllCards();
    }

    static createCard(newCard) {
        return Card.createCard(newCard);
    }

    static updateCard(card) {
        return Card.updateCard(card);
    }

    static deleteCard(cardName) {
        return Card.deleteCard(cardName);
    }
}