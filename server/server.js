import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Your middleware function
const validateInput = (req, res, next) => {
  const { firstName, lastName, email, subject, message } = req.body;
   
  if (!firstName || firstName.trim().length < 2) {
    return res.status(400).json({ 
      error: 'First name must be at least 2 characters long' 
    });
  }

  if (!lastName || lastName.trim().length < 3) {
    return res.status(400).json({
      error: 'Last name must be at least 3 characters long'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Please provide a valid email address' 
    });
  }

  // Validate subject
  if (!subject || subject.trim().length < 3) {
    return res.status(400).json({ 
      error: 'Subject must be at least 3 characters long' 
    });
  }

  // Validate message
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ 
      error: 'Message must be at least 10 characters long' 
    });
  }
  
  req.validatedData = {
    firstName : firstName.trim(),
    lastName : lastName.trim(),
    email : email.trim(),
    subject: subject.trim(),
    message : message.trim()
  }
  
  next();
};

// Route with middleware
app.post('/api/contact', validateInput, (req, res) => {
  const { firstName, lastName, email, subject, message } = req.validatedData;


  
  // Process the validated data
  console.log('Received firstName:', firstName);
  console.log('Received LAST name: ', lastName );

  
  res.json({ 
    success: true, 
    message: `Hello ${firstName}! ${lastName}, I'm glad you sent me your email: ${email} and told me ${subject} is from ${message}`,
    data: req.validatedData 
  });
});

app.listen(3000, () => {
  console.log('Server on 3k Sire!');
})