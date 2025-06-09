import { Router } from 'express';
const router = Router();
import { index, show } from '../controllers/user.controller';

router.get('/', index);
router.get('/:id', show);

export default router;
