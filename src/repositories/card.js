import fs from 'fs';
import Board from "./board";

export default class Card {
    static getAllCards(){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/cards.json', (err, data) => {
                if (err) throw err;
                resolve(data.toString());
            });
        });

    }

    static createCard(boardName, card){
        return new Promise(async (resolve, reject) => {
            const board = await Board.getBoardByName(boardName);
            await Board.updateBoard({
                ...board,
                cards: board.cards.concat(card.name)
            });
            fs.readFile('./src/store/cards.json', (err, data) => {
                if (err) throw err;
                let cardsArray = [];
                if (data.toString()) {
                    cardsArray = JSON.parse(data.toString());
                    cardsArray.push({
                        ...card,
                        boardName
                    });
                    let writeStream = fs.createWriteStream('./src/store/cards.json', { flags: 'w' });
                    writeStream.write(JSON.stringify(cardsArray, null, 4));
                    writeStream.end();

                    writeStream.on("finish", () => {
                        resolve('Card successfully created!')
                    })
                }
            });
        });
    }

    static updateCard(card){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/cards.json', (err, data) => {
                if (err) throw err;
                if (data.toString()) {
                    let cardsArray = JSON.parse(data.toString());
                    cardsArray = cardsArray.map((currentCard) => {
                        if (currentCard.name === card.name) {
                            return {
                                ...card,
                                boardName: currentCard.boardName
                            };
                        }

                        return currentCard;
                    });
                    let writeStream = fs.createWriteStream('./src/store/cards.json', { flags: 'w' });
                    writeStream.write(JSON.stringify(cardsArray, null, 4));
                    writeStream.end();

                    writeStream.on("finish", () => {
                        resolve('Card successfully updated!')
                    });
                } else {
                    resolve('Cards is empty!')
                }
            });
        });
    }

    static deleteCard(cardName){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/cards.json', (err, data) => {
                if (err) throw err;
                if (data.toString()) {
                    let cardsArray = JSON.parse(data.toString());
                    cardsArray = cardsArray.filter((currentCard) => {
                        return currentCard.name !== cardName;
                    });
                    let writeStream = fs.createWriteStream('./src/store/cards.json', { flags: 'w' });
                    writeStream.write(JSON.stringify(cardsArray, null, 4));
                    writeStream.end();

                    writeStream.on("finish", () => {
                        resolve('Card successfully deleted!')
                    });
                } else {
                    resolve('Cards is empty!')
                }
            });
        });
    }
}