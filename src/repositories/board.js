import fs from 'fs';

export default class Board {
    static getAllBoards(){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/boards.json', (err, data) => {
                if (err) throw err;
                resolve(data.toString());
            });
        });

    }

    static async getBoardByName(boardName){

    }

    static async createBoard(board){
        let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
        writeStream.write(JSON.stringify(board, null, 4));
        writeStream.end();
    }

    static async updateBoard(boardName){

    }

    static async deleteBoard(boardName){

    }
}