import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

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
  if (!message || message.trim().length < 3) {
    return res.status(400).json({
      error: 'Message must be at least 3 characters long'
    });
  }

  req.validatedData = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim()
  }

  next();
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

router.post('/contact', validateInput, async (req, res) => {

  console.log('=== DEBUGGING ENV VARS ===');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
  console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length);
  console.log('All env keys:', Object.keys(process.env).filter(key => key.includes('EMAIL')));
  console.log('========================');

  try {

    const { firstName, lastName, email, subject, message } = req.validatedData;

    // Process the validated data
    console.log('Received firstName:', firstName);
    console.log('Received LAST name: ', lastName);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email // So you can reply directly to the sender
    };

    await transporter.sendMail(mailOptions);


    res.status(200).json({
      success: true,
      message: `Hello ${firstName}! ${lastName}, I'm glad you sent me your email: ${email} and told me ${subject} is from ${message}`,
      data: req.validatedData
    });


  } catch (error) {
    console.error('Email problem: ', error);
    res.status(500).json({
      error: 'Failed to send email'
    });
  }
});

export default router;
