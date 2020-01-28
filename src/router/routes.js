import express from 'express';

const router = express.Router();

//get all boards
router.get('/boards', (request, response) => {
    console.log('ALL BOARDS!');
});

//get board by boardId
router.get('/board/:boardId', (request, response) => {
    console.log(request.params.boardId);
});

//create new board
router.post('/boards', (request, response) => {
    console.log('CREATE');
});

//update board
router.put('/board/:boardId', (request, response) => {
    console.log(request.params.boardId);
});

//delete board
router.delete('/board/:boardId', (request, response) => {
    console.log(request.params.boardId);
});

//get all cards
router.get('/board/:boardId/cards', (request, response) => {
    console.log('ALL CARDS!');
});

//get card by cardId
router.get('/board/:boardId/card/:cardId', (request, response) => {
    console.log(request.params.boardId);
    console.log(request.params.cardId);
});

//create card
router.post('/board/:boardId/cards', (request, response) => {
    console.log('all cards from board by boardId!');
    console.log(request.params.boardId);
});

//update card
router.put('/board/:boardId/card/:cardId', (request, response) => {
    console.log(request.params.boardId);
    console.log(request.params.cardId);
});

//delete card
router.delete('/board/:boardId/card/:cardId', (request, response) => {
    console.log(request.params.boardId);
    console.log(request.params.cardId);
});


export default router;
