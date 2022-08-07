import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import { register, login, getMe } from './controllers/userController.js'

mongoose
  .connect('mongodb+srv://ildar:batistuta@blog.g2yr8kn.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB connect'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());

app.post('/login', loginValidation, login);
app.post('/register', registerValidation, register);
app.get('/me', checkAuth, getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server started');
});
