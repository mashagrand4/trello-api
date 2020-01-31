import express from 'express';
import Board from "../controllers/boardController";
import validateSchema from "../middlewares/validateSсhema";
import checkUserPermissions from "../middlewares/checkUserPermissions";

const router = express.Router();

router.get('/boards', Board.getAllBoards);
router.get('/boards/:boardName', Board.getBoardByName);
router.post('/boards', [checkUserPermissions, validateSchema], Board.createBoard);
router.put('/boards', [checkUserPermissions, validateSchema], Board.updateBoard);
router.delete('/boards/:boardName', [checkUserPermissions], Board.deleteBoard);

export default router;
