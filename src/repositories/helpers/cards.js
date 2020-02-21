import {readFile, writeToFile} from "./files";

const filePath = './src/store/cards.json';
let currentCards;

export const getCards = async () => {
    if(!currentCards) {
        const cards = await readFile(filePath);
        if (cards) {
            currentCards = JSON.parse(cards);
            return currentCards;
        }
        return [];
    }

    return currentCards;
};

export const setCards = async (cards) => {
    const data = JSON.stringify(cards, null, 4);
    await writeToFile(filePath, data);
    currentCards = cards;
};