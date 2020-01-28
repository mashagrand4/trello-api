import express from 'express';
import Card from "../controllers/cardController";

const cardsRouter = express.Router();

cardsRouter.get('/boards/:boardId/cards', Card.getAllCards);
cardsRouter.get('/boards/:boardId/cards/:cardId', Card.getCardById);
cardsRouter.post('/boards/:boardId/cards', Card.createCard);
cardsRouter.put('/boards/:boardId/cards/:cardId', Card.updateCard);
cardsRouter.delete('/boards/:boardId/cards/:cardId', Card.deleteCard);

export default cardsRouter;
