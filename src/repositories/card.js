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
                reject(400);
            } else {
                cards.push(newCard);
                await setCards(cards);

                resolve(newCard);
            }
        });
    },

    updateCard: newCard => {
        return new Promise(async (resolve, reject) => {
            let cards = getCards();

            const card = cards.find(card => {
                return card.name === newCard.name;
            });

            if (card) {
                reject(new Error("400"));
            } else {
                cards = cards.map((card) => {
                    if (card.name === newCard.name) {
                        return {
                            ...newCard,
                            boardName: card.boardName
                        };
                    }
                    return card;
                });
                await setCards(cards);

                resolve(newCard);
            }
        });
    },

    deleteCard: cardName => {
        return new Promise((resolve, reject) => {
            let cards = getCards();

            cards = cards.filter((card) => {
                return card.name !== cardName;
            });

            resolve(setCards(cards));
        });
    }
};