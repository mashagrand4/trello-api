import express from 'express';
import Board from "../controllers/boardController";
import validateSchema from "../middlewares/validateSсhema";
import checkUserPermissions from "../middlewares/checkUserPermissions";

const router = express.Router();

router.get('/getAllBoards', Board.getAllBoards);
router.get('/getBoardByName', Board.getBoardByName);
router.post('/createBoard', checkUserPermissions, validateSchema, Board.createBoard);
router.put('/updateBoard', checkUserPermissions, validateSchema, Board.updateBoard);
router.delete('/deleteBoard', checkUserPermissions, Board.deleteBoard);

export default router;
