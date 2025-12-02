const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  status: { type: String, enum: ['open','in-progress','closed'], default: 'open' },
  priority: { type: String, enum: ['low','medium','high'], default: 'medium' },
  createdBy: { type: String, default: 'anonymous' },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', TicketSchema);