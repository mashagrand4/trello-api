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
                if (data.toString()) {
                    let boardsArray = JSON.parse(data.toString());
                    let board = boardsArray.find(board => {
                        console.log(boardName, board.name);
                        return board.name === boardName;
                    });
                    resolve(board);
                }
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
                boardsArray.push({
                    ...board,
                    create_at: Date.now(),
                    cards: [],
                });
                let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
                writeStream.write(JSON.stringify(boardsArray, null, 4));
                writeStream.end();

                writeStream.on("finish", () => {
                    resolve('Board successfully created!')
                })
            });
        });
    }

    static updateBoard(board){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/boards.json', (err, data) => {
                if (err) throw err;
                if (data.toString()) {
                    let boardsArray = JSON.parse(data.toString());
                    boardsArray = boardsArray.map((currentBoard) => {
                        if (currentBoard.name === board.name) {
                            return board;
                        }

                        return currentBoard;
                    });
                    let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
                    writeStream.write(JSON.stringify(boardsArray, null, 4));
                    writeStream.end();

                    writeStream.on("finish", () => {
                        resolve('Board successfully updated!')
                    });
                } else {
                    resolve('Boards is empty!')
                }
            });
        });
    }

    static deleteBoard(boardName){
        return new Promise((resolve, reject) => {
            fs.readFile('./src/store/boards.json', (err, data) => {
                if (err) throw err;
                if (data.toString()) {
                    let boardsArray = JSON.parse(data.toString());
                    console.log(boardName);
                    boardsArray = boardsArray.filter((currentBoard) => {
                        return currentBoard.name !== boardName;
                    });
                    console.log(boardsArray);
                    let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
                    writeStream.write(JSON.stringify(boardsArray, null, 4));
                    writeStream.end();

                    writeStream.on("finish", () => {
                        resolve('Board successfully deleted!')
                    });
                } else {
                    resolve('Boards is empty!')
                }
            });
        });
    }
}