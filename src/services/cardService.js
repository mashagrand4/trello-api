import Card from "../repositories/card";
import Board from "../repositories/board";

export default class CardService {
    static getAllCards() {
        return Card.getAllCards();
    }

    static async createCard(boardName, card) {
        const board = await Board.getBoardByName(boardName);
        await Board.updateBoard({
            ...board,
            cards: board.cards.concat(card.name)
        });
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