export default class Board {
    static getAllBoards(req, res) {
        res.send('get all boards');
    };

    static getBoardById(req, res) {
        res.send('get board by id');
    };

    static createBoard(req, res) {
        res.send('create board');
    };

    static updateBoard(req, res) {
        res.send('update board');
    };

    static deleteBoard(req, res) {
        res.send('delete board');
    };
}