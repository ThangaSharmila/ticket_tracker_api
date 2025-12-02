import React from 'react';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 900, margin: '20px auto', padding: 20 }}>
      <h1>Ticket Tracker</h1>
      <TicketForm />
      <hr />
      <TicketList />
    </div>
  );
}