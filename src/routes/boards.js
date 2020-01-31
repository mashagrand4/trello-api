import express from 'express';
import Board from "../controllers/boardController";
import validateSchema from "../middlewares/validateSсhema";
import checkUserPermissions from "../middlewares/checkUserPermissions";

const router = express.Router();

router.get('/', Board.getAllBoards);
router.get('/:boardName', Board.getBoardByName);
router.post('/', [checkUserPermissions, validateSchema], Board.createBoard);
router.put('/', [checkUserPermissions, validateSchema], Board.updateBoard);
router.delete('/:boardName', [checkUserPermissions], Board.deleteBoard);

export default router;
