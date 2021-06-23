import nodemailer from "nodemailer"
import fs from "fs"
import handlebars from "handlebars"

interface IDataVariable {
    name: string;
    link: string;
}

interface IDataInSendEmail {
    to: string;
    path: string;
    variable: IDataVariable;
}

class ConfigSendEmail {
    static async sendEmail({ to, path, variable }: IDataInSendEmail): Promise<void> {
        const accountUser = await nodemailer.createTestAccount()

        const transportEmail = nodemailer.createTransport({
            host: accountUser.smtp.host,
            port: accountUser.smtp.port,
            secure: accountUser.smtp.secure,
            auth: {
                user: accountUser.user,
                pass: accountUser.pass
            }
        })

        const pathUTF8 = fs.readFileSync(path).toString("utf-8")

        const templatePath = handlebars.compile(pathUTF8)

        const templateHTML = templatePath(variable)

        const message = await transportEmail.sendMail({
            from: "mindcontato@mind.com.br>",
            to: to,
            subject: "Reset password - Mind !",
            html: templateHTML
        })

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

export { ConfigSendEmail }
