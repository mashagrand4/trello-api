import BoardSchema from "./BoardSchema";

export default class Board {
    static async createBoard(board){
        console.log(board);
        const validBoard = await BoardSchema.validateAsync(board);
        console.log(validBoard);
    }
}