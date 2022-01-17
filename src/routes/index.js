import express from 'express';
import boardsRouter from './boards';
import cardsRouter from './cards';

const router = express.Router();

router.use('/boards', boardsRouter);
router.use('/cards', cardsRouter);

export default router;