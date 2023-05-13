var cron = require('node-cron');
const userModal = require('./Modal/userModal')
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

const  sendEmail =async(db)=> {

  const users = await userModal.find()
  

      users.forEach((user) => {
        const mailOptions = {
          from: 'your_email@gmail.com',
          to: user.email,
          subject: 'Reminder: Important message',
          text: 'This is an important message that you need to read.'
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email: ', error);
          } else {
            console.log('Email sent: ', info.response);
          }
        });
      });
    }

    cron.schedule('0 10 * * *', () => {
      console.log('Sending emails to all users...');
      sendEmail();
    });
 
