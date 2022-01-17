import express from 'express';
import Board from "../controllers/boardController";
import validator from "../middlewares/validateParams";
import checkUserPermissions from "../middlewares/checkUserPermissions";

const {validateBoardName, validateBoardFields} = validator;
const router = express.Router();

router.get('/getAllBoards', Board.getAllBoards);
router.get('/getBoardByName', validateBoardName, Board.getBoardByName);
router.post('/createBoard', checkUserPermissions, validateBoardFields, Board.createBoard);
router.put('/updateBoard', checkUserPermissions, validateBoardFields, Board.updateBoard);
router.delete('/deleteBoard', checkUserPermissions, validateBoardName, Board.deleteBoard);

export default router;
