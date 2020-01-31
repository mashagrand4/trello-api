import express from 'express';
import Card from "../controllers/cardController";
import checkUserPermissions from "../middlewares/checkUserPermissions";
import validateSchema from "../middlewares/validateSсhema";

const router = express.Router();

router.get('/', Card.getAllCards);
router.post('/', [checkUserPermissions, validateSchema], Card.createCard);
router.put('/:cardName',[checkUserPermissions, validateSchema],  Card.updateCard);
router.delete('/:cardName', [checkUserPermissions], Card.deleteCard);

export default router;
