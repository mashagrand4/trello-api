export default class Card {
    static getAllCards(req, res) {
        res.send('get all cards');
    };

    static getCardById(req, res) {
        res.send('get card by id');
    };

    static createCard(req, res) {
        res.send('create card');
    };

    static updateCard(req, res) {
        res.send('update card');
    };

    static deleteCard(req, res) {
        res.send('delete card');
    };
}