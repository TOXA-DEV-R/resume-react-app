/** @format */
const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const { name, email, subject, message } = req.body;

  const USER_GMAIL = "toxa.tb9@gmail.com";
  const PASSWORD = "hxmmjwqpvqizlifs";

  try {
    const mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_GMAIL,
        pass: PASSWORD,
      },
      secure: true,
    });

    const details = {
      from: email,
      to: USER_GMAIL,
      subject: `Имя ${name}`,
      text: `
            Name ${name}.
            phone: ${subject}.
            Почта: ${message}.
            `,
    };

    mailTransporter.sendMail(details, (err) => {
      if (err) {
        res.status(500).send({ error: "sending message Error" });
      } else {
        res.status(200).send({ send: "send message" });
      }
    });
  } catch (err) {
    console.log("Catch Error" + err);
    res.status(500).send({ error: "failed to fetch data" });
  }
}
