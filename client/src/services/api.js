const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export async function fetchTickets() {
  const res = await fetch(`${API_BASE}/tickets`);
  return res.json();
}

export async function createTicket(payload) {
  // Create anonymously — no auth by default
  return fetch(`${API_BASE}/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(r => r.json());
}

export async function updateTicket(id, payload) {
  return fetch(`${API_BASE}/tickets/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: '' },
    body: JSON.stringify(payload)
  }).then(r => r.json());
}

export async function deleteTicket(id) {
  return fetch(`${API_BASE}/tickets/${id}`, { method: 'DELETE', headers: { Authorization: '' } }).then(r => r.json());
}