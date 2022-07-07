import nodemailer from "nodemailer";


export default function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body.message);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  const mailOptions = {
    from: "nagappan08@gmail.com",
    to: "devgrovestechnologies@gmail.com",
    subject: "Contact form from devgroves",
    text: body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  
  res.status(200).json({ status: "OK" });
}