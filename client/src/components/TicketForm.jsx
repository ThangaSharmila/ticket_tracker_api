import React, { useState } from 'react';
import { createTicket } from '../services/api';

export default function TicketForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (!title) return alert('Title required');
    await createTicket({ title, description });
    setTitle(''); setDescription('');
    window.location.reload();
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      </div>
      <div>
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      </div>
      <button type="submit">Create Ticket</button>
    </form>
  );
}