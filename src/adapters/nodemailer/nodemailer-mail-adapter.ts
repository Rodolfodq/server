import { MailAdapter, SendMAilData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "",
    pass: "",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMAilData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Rodolfo Queiroz <rodolfo.dqueiroz@gmail.com>",
      subject,
      html: body,
    });
  }
}
