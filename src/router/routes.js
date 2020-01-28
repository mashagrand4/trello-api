import express from 'express';

const router = express.Router();

//get all boards
router.get('/boards', (request, response) => {
    console.log('ALL BOARDS!');
});

//get board by boardId
router.get('/boards/:boardId', (request, response) => {
    console.log(request.params.boardId);
});

//create new board
router.post('/boards', (request, response) => {
    console.log('CREATE');
});

//update board
router.put('/boards/:boardId', (request, response) => {
    console.log(request.params.boardId);
});

//delete board
router.delete('/boards/:boardId', (request, response) => {
    console.log(request.params.boardId);
});

//get all cards
router.get('/boards/:boardId/cards', (request, response) => {
    console.log('ALL CARDS!');
});

//get card by cardId
router.get('/boards/:boardId/card/s:cardId', (request, response) => {
    console.log(request.params.boardId);
    console.log(request.params.cardId);
});

//create card
router.post('/boards/:boardId/cards', (request, response) => {
    console.log('all cards from board by boardId!');
    console.log(request.params.boardId);
});

//update card
router.put('/boards/:boardId/cards/:cardId', (request, response) => {
    console.log(request.params.boardId);
    console.log(request.params.cardId);
});

//delete card
router.delete('/boards/:boardId/cards/:cardId', (request, response) => {
    console.log(request.params.boardId);
    console.log(request.params.cardId);
});


export default router;
