import express from 'express';
import Card from "../controllers/cardController";
import checkUserPermissions from "../middlewares/checkUserPermissions";
import validateSchema from "../middlewares/validateSсhema";

const router = express.Router();

router.get('/cards', Card.getAllCards);
router.post('/cards', [checkUserPermissions, validateSchema], Card.createCard);
router.put('/cards/:cardName',[checkUserPermissions, validateSchema],  Card.updateCard);
router.delete('/cards/:cardName', [checkUserPermissions], Card.deleteCard);

export default router;
