Setup:
1. Copy server/.env.example -> server/.env and set MONGO_URI, JWT_SECRET.
2. cd server && npm install && npm run dev
3. cd client && npm install && npm start
API: GET /api/tickets, POST /api/tickets (protected), PUT /api/tickets/:id (protected), DELETE /api/tickets/:id (protected)