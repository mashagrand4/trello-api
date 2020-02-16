import {getCards, setCards} from "./helpers/cards";
import ServerError from "./errors/ServerError";

export default {
    getAllCards: async () => {
        return await getCards();
    },

    createCard: async newCard => {
        let cards = await getCards();

        const card = cards.find(card => {
            return card.name === newCard.name;
        });

        if (card) {
            throw new ServerError(`Card with name: ${newCard.name} does not exist!`);
        }

        cards.push(newCard);
        await setCards(cards);

        return newCard;
    },

    updateCard: async newCard => {
        let cards = await getCards();

        const card = cards.find(card => {
            return card.name === newCard.name;
        });

        if (!card) {
            throw new ServerError(`Card with name: ${newCard.name} does not exist!`);
        }

        cards = cards.map((card) => {
            if (card.name === newCard.name) {
                return {
                    ...newCard,
                };
            }
            return card;
        });

        await setCards(cards);

        return newCard;
    },

    deleteCard: async cardName => {
        let cards = await getCards();

        const card = cards.find(card => {
            return card.name === cardName;
        });

        if (!card) {
            throw new ServerError(`Card with name: ${cardName} does not exist!`);
        }

        cards = cards.filter((card) => {
            return card.name !== cardName;
        });

        await setCards(cards);
    }
};