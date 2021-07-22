const sqMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sqMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sqMail.send({
    to: email,
    from: 'lukasz.stodolka100@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sqMail.send({
    to: email,
    from: 'lukasz.stodolka100@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
