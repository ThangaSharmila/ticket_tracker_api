const Ticket = require('../models/Ticket');

async function getTickets(req, res, next) {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) { next(err); }
}

async function getTicketById(req, res, next) {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (err) { next(err); }
}

async function createTicket(req, res, next) {
  try {
    const body = req.body;
    const ticket = await Ticket.create({ ...body, createdBy: req.user?.id || body.createdBy || 'anonymous' });
    res.status(201).json(ticket);
  } catch (err) { next(err); }
}

async function updateTicket(req, res, next) {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (err) { next(err); }
}

async function deleteTicket(req, res, next) {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
}

module.exports = { getTickets, getTicketById, createTicket, updateTicket, deleteTicket };