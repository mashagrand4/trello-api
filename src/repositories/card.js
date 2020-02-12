import {getCards, setCards} from "./helpers/cards";
import ResultFormatter from "./helpers/resultFormatter";

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
                resolve(new ResultFormatter(undefined , '400'));
            } else {
                cards.push(newCard);
                await setCards(cards);

                resolve(new ResultFormatter(newCard));
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

            resolve(new ResultFormatter(newCard));
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