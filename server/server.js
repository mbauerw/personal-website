import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import contactRoutes from './routes/contact.js';


const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);


app.listen(3000, () => {
  console.log('Server on 3k Sire!');
})