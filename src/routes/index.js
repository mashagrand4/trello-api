import express from 'express';
import boardsRouter from './boards';
import cardsRouter from './cards';

const router = express.Router();

router.use(boardsRouter);
router.use(cardsRouter);

export default router;