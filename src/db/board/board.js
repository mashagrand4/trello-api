import BoardSchema from "./BoardSchema";
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

    static async getBoardByName(board){
        const validBoard = await BoardSchema.validateAsync(board);
        let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
        console.log(validBoard);
        writeStream.write(JSON.stringify(validBoard, null, 4));
        writeStream.end();
    }

    static async createBoard(board){
        const validBoard = await BoardSchema.validateAsync(board);
        let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
        console.log(validBoard);
        writeStream.write(JSON.stringify(validBoard, null, 4));
        writeStream.end();
    }

    static async updateBoard(board){
        const validBoard = await BoardSchema.validateAsync(board);
        let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
        console.log(validBoard);
        writeStream.write(JSON.stringify(validBoard, null, 4));
        writeStream.end();
    }

    static async deleteBoard(board){
        const validBoard = await BoardSchema.validateAsync(board);
        let writeStream = fs.createWriteStream('./src/store/boards.json', { flags: 'w' });
        console.log(validBoard);
        writeStream.write(JSON.stringify(validBoard, null, 4));
        writeStream.end();
    }
}