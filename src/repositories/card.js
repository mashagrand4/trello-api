import {getCards, setCards} from "./helpers/cards";

export default {
    getAllCards: () => {
        return new Promise((resolve, reject) => {
            resolve(getCards());
        });
    },

    createCard: newCard => {
        return new Promise( async (resolve, reject) => {
            let cards = await getCards();

            const card = cards.find(card => {
                return card.name === newCard.name;
            });

            if (card) {
            } else {
                cards.push(newCard);
                await setCards(cards);

            }
        });
    },

    updateCard: newCard => {
        return new Promise(async (resolve, reject) => {
            let cards = await getCards();

            cards = cards.map((card) => {
                if (card.name === newCard.name) {
                    return {
                        ...newCard,
                    };
                }
                return card;
            });

            await setCards(cards);

        });
    },

    deleteCard: cardName => {
        return new Promise(async (resolve, reject) => {
            let cards = await getCards();

            cards = cards.filter((card) => {
                return card.name !== cardName;
            });

            resolve(setCards(cards));
        });
    }
};