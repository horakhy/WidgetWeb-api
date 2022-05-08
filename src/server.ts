import { prisma } from './prisma';
import express from 'express'
import nodemailer from 'nodemailer'

// SQLite (Salva em um arquivo)
// Prisma (Abstrai a forma de conversar com o BD e então converte para SQL)

// GET - BUSCAR INFORMAÇÕES
// POST - CRIAR INFORMAÇÕES
// PUT - ATUALIZAR INFORMAÇÕES
// PATCH - ATUALIZAR INFORMAÇÕES ÚNICAS
// DELETE - DELETAR INFORMAÇÕES

const app = express();

// Para o express compreender os objetos do JS
app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "688a9187e9696c",
    pass: "1ae284c4111d21"
  }
});

app.post('/feedbacks', async (req, resp) => {
  const { type, comment, screenshot } = req.body;
  
  const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    }
  })

  await transport.sendMail({
    from: "Equipe Eu mesmo <ola@eumesmo.com>",
    to: "Eu mesmo <eumesmo@gmail.com>",
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,

    ].join('\n')
  })

  return resp.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
})



