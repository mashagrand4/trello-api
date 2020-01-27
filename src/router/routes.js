import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    console.log('Work!');
});

export default router;
