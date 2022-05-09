import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "688a9187e9696c",
    pass: "1ae284c4111d21",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, body } = data;
    
    await transport.sendMail({
    from: "Equipe Eu mesmo <ola@eumesmo.com>",
    to: "Eu mesmo <eumesmo@gmail.com>",
    subject: subject,
    html: body,
  })
  }
}