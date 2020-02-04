import express from 'express';
import Board from "../controllers/boardController";
import validateParams from "../middlewares/validateParams";
import checkUserPermissions from "../middlewares/checkUserPermissions";

const router = express.Router();

router.get('/getAllBoards', Board.getAllBoards);
router.get('/getBoardByName', Board.getBoardByName);
router.post('/createBoard', checkUserPermissions, validateParams, Board.createBoard);
router.put('/updateBoard', checkUserPermissions, validateParams, Board.updateBoard);
router.delete('/deleteBoard', checkUserPermissions, Board.deleteBoard);

export default router;
