import express from 'express';
import Board from "../controllers/boardController";

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/boards');
});
router.get('/boards', Board.getAllBoards);
router.get('/boards/:boardName', Board.getBoardByName);
router.post('/boards', Board.createBoard);
router.put('/boards/:boardName', Board.updateBoard);
router.delete('/boards/:boardName', Board.deleteBoard);

export default router;
