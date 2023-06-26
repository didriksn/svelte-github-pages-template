import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { json, static as expressStatic } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(json());

// Serve static files from the "public" directory
app.use(expressStatic(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const messages = [];

app.post('/messages', (req, res) => {
  const message = req.body.msg;
  messages.push(message);
  res.status(201).json({ message: 'Message stored successfully' });
});

app.get('/messages', (req, res) => {
  res.json({ messages });
});

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
