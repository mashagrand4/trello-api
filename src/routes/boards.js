import express from 'express';
import Board from "../controllers/boardController";
import cardsRouter from "./cards";

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/boards');
});
router.get('/boards', Board.getAllBoards);
router.get('/boards/:boardId', Board.getBoardById);
router.post('/boards', Board.createBoard);
router.put('/boards/:boardId', Board.updateBoard);
router.delete('/boards/:boardId', Board.deleteBoard);

router.use(cardsRouter);

export default router;
