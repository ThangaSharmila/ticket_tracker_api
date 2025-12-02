const express = require('express');
const router = express.Router();
const controller = require('../controllers/ticketController');
const auth = require('../middleware/auth');

// Public: list and get
router.get('/', controller.getTickets);
router.get('/:id', controller.getTicketById);

// Protected: create, update, delete
router.post('/', auth, controller.createTicket);
router.put('/:id', auth, controller.updateTicket);
router.delete('/:id', auth, controller.deleteTicket);

module.exports = router;