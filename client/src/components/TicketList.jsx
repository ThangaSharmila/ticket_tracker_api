import React, { useEffect, useState } from 'react';
import { fetchTickets, deleteTicket, updateTicket } from '../services/api';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => { fetchTickets().then(setTickets); }, []);

  async function onDelete(id) {
    if (!confirm('Delete ticket?')) return;
    await deleteTicket(id);
    setTickets(prev => prev.filter(t => t._id !== id));
  }

  async function onToggleStatus(t) {
    const next = t.status === 'open' ? 'in-progress' : (t.status === 'in-progress' ? 'closed' : 'open');
    const updated = await updateTicket(t._id, { status: next });
    setTickets(prev => prev.map(p => p._id === updated._id ? updated : p));
  }

  return (
    <div>
      {tickets.length === 0 && <p>No tickets</p>}
      <ul>
        {tickets.map(t => (
          <li key={t._id}>
            <strong>{t.title}</strong> <small>({t.status})</small>
            <div>{t.description}</div>
            <button onClick={()=>onToggleStatus(t)}>Next status</button>
            <button onClick={()=>onDelete(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}