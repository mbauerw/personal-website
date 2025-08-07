import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Your middleware function
const validateInput = (req, res, next) => {
  const { firstName } = req.body;
   
  if (!firstName || firstName.trim().length < 2) {
    return res.status(400).json({ 
      error: 'First name must be at least 2 characters long' 
    });
  }
  
  // Add validation result to request object
  req.validatedData = { firstName: firstName.trim() };
  next();
};

// Route with middleware
app.post('/api/contact', validateInput, (req, res) => {
  const { firstName } = req.validatedData;
  
  // Process the validated data
  console.log('Received firstName:', firstName);
  
  res.json({ 
    success: true, 
    message: `Hello ${firstName}!`,
    data: req.validatedData 
  });
});

app.

app.listen(3000, () => {
  console.log('Server on 3k Sire!');
})