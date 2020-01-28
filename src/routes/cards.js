import express from 'express';
import Card from "../controllers/cardController";

const router = express.Router();

router.get('/cards', Card.getAllCards);
router.get('/cards/:cardId', Card.getCardById);
router.post('/cards', Card.createCard);
router.put('/cards/:cardId', Card.updateCard);
router.delete('/cards/:cardId', Card.deleteCard);

export default router;
