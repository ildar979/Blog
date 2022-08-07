import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://ildar:batistuta@blog.g2yr8kn.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB connect'))
  .catch((err) => console.log('DB error', err));
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Пирювет придурки!');
});

app.post('/register', (req, res) => {
  
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server started');
});
