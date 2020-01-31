import fs from 'fs';

export default class Card {
    static getAllCards(){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/cards.json', (err, data) => {
                if (err) throw err;
                resolve(data.toString());
            });
        });

    }

    static async createCard(boardName, card){
        let writeStream = fs.createWriteStream('./src/store/cards.json', { flags: 'w' });
        console.log(card);
        writeStream.write(JSON.stringify(card, null, 4));
        writeStream.end();
    }

    static async updateCard(card){

    }

    static async deleteCard(cardName){

    }
}