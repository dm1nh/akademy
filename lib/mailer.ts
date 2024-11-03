import nodemailer from "nodemailer"

// @see https://nodemailer.com/#example
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "eric57@ethereal.email",
    pass: "rDvsrmbwK6wDS7DKV8",
  },
})

const mailer = {
  send: async function ({
    to,
    subject,
    html,
  }: {
    to: string
    subject: string
    html: string
  }) {
    return transporter.sendMail({
      from: "Ngo Dang Minh",
      to,
      subject,
      html,
    })
  },
}

export default mailer
