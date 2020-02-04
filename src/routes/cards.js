import express from 'express';
import Card from "../controllers/cardController";
import checkUserPermissions from "../middlewares/checkUserPermissions";
import validateParams from "../middlewares/validateParams";

const router = express.Router();

router.get('/getAllCards', Card.getAllCards);
router.post('/createCard', checkUserPermissions, validateParams, Card.createCard);
router.put('/updateCard',checkUserPermissions, validateParams,  Card.updateCard);
router.delete('/deleteCard', checkUserPermissions, Card.deleteCard);

export default router;
