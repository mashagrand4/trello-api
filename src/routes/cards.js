import express from 'express';
import Card from "../controllers/cardController";
import checkUserPermissions from "../middlewares/checkUserPermissions";
import validateSchema from "../middlewares/validateSсhema";

const router = express.Router();

router.get('/getAllCards', Card.getAllCards);
router.post('/createCard', checkUserPermissions, validateSchema, Card.createCard);
router.put('/updateCard',checkUserPermissions, validateSchema,  Card.updateCard);
router.delete('/deleteCard', checkUserPermissions, Card.deleteCard);

export default router;
