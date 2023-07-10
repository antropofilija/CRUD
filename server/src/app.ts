import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/db.js';
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from './controllers/user.controllers.js';

const app: Express = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

// Starting server
const startServer = () =>
  app.listen(PORT, () => console.log('Staring server on port: ' + PORT));

// Database
connectDatabase(startServer);

// Routes
// -- GET /api/crud - returns all users
app.get('/api/crud', getUsers);

// -- GET /api/crud/:id - returns one user by id
app.get('/api/crud/:id', getUser);

// -- POST /api/crud - adds user
app.post('/api/crud', addUser);

// -- PUT /api/crud/:id - updates user by id
app.put('/api/crud/:id', updateUser);

// -- DELETE /api/crud/:id- deletes user by id
app.delete('/api/crud/:id', deleteUser);
