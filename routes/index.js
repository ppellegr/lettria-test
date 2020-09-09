import express from 'express';
const router = express.Router();
import { AuthorsController, MessagesController } from '../controllers';

router.get('/authors', AuthorsController.index);
router.get('/authors/:id', AuthorsController.show);
router.post('/authors', AuthorsController.store);
router.put('/authors/:id', AuthorsController.update);
router.delete('/authors/:id', AuthorsController.remove);

router.get('/messages', MessagesController.index);
router.get('/messages/:id', MessagesController.show);
router.post('/messages', MessagesController.store);
router.put('/messages/:id', MessagesController.update);
router.delete('/messages/:id', MessagesController.remove);

module.exports = router;
