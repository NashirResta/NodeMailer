const nodemailer = require("nodemailer");
const sendmail = async () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: "postmaster@sandbox6bac0d2e0ca942b9a23860c7db9bb771.mailgun.org",
      pass: "5685a6b84e1e7e4cafda53da8635cc32-c250c684-7cfdc11e",
    },
  });
  let info = await transport.sendMail({
    from: '"Dari nodemailer nih" <noreply@me>',
    to: "ernpoly22@gmail.com",
    subject: "coba coba nih gaes",
    text: "pencet buat ke ig gw",
    html: "<a>https://www.instagram.com/restfzn_/</a>",
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendmail;
