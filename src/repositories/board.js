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

    static getBoardByName(boardName){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/boards.json', (err, data) => {
                if (err) throw err;
                console.log(JSON.parse(data.toString()));
                resolve(data.toString());
            });
        });
    }

    static createBoard(board){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/boards.json', (err, data) => {
                if (err) throw err;
                let boardsArray = [];
                if (data.toString()) {
                    boardsArray = JSON.parse(data.toString());
                }
                boardsArray.push(board);
                let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
                writeStream.write(JSON.stringify(boardsArray, null, 4));
                writeStream.end();

                writeStream.on("finish", () => {
                    resolve('Board successfully created!')
                })
            });
        });
    }

    static updateBoard(boardName){

    }

    static deleteBoard(boardName){

    }
}