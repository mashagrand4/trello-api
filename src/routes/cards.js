import express from 'express';
import Card from "../controllers/cardController";
import checkUserPermissions from "../middlewares/checkUserPermissions";
import validator from "../middlewares/validateParams";

const {validateCardFields, validateCardName} = validator;
const router = express.Router();

router.get('/getAllCards', Card.getAllCards);
router.post('/createCard', checkUserPermissions, validateCardFields, Card.createCard);
router.put('/updateCard',checkUserPermissions, validateCardFields, Card.updateCard);
router.delete('/deleteCard', checkUserPermissions, validateCardName, Card.deleteCard);

export default router;
