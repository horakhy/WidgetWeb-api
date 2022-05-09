import express from 'express'
import { routes } from './routes'
// SQLite (Salva em um arquivo)
// Prisma (Abstrai a forma de conversar com o BD e então converte para SQL)

// GET - BUSCAR INFORMAÇÕES
// POST - CRIAR INFORMAÇÕES
// PUT - ATUALIZAR INFORMAÇÕES
// PATCH - ATUALIZAR INFORMAÇÕES ÚNICAS
// DELETE - DELETAR INFORMAÇÕES

const app = express();

app.use(express.json());

app.use(routes);

// Para o express compreender os objetos do JS


app.listen(3333, () => {
  console.log('Server started on port 3333');
});



