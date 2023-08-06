import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const app: Application = express();

app.use(bodyParser.json());

interface User {
  id: string;
  nome: string;
  age: number;
  email: string;
  profile: {
    type: string;
    credit: number;
    busines: string;
  };
}

let lista: User[] = [
  {
    id: uuidv4(),
    nome: '',
    age: 0,
    email: '',
    profile: {
      type: '',
      credit: 0,
      busines: '',
    },
  },
];

// cadastrando usuario
app.post('/cadastrando', (req: Request, res: Response) => {
  const { nome, age, email, profile } = req.body;

  if (!nome || !age || !email || !profile || !profile.type || !profile.credit || !profile.busines) {
    return res.status(400).json({ error: 'Erro no cadastro. Todos os campos são obrigatórios.' });
  }

  const newid: User = {
    id: uuidv4(),
    nome,
    age,
    email,
    profile: {
      type: profile.type,
      credit: profile.credit,
      busines: profile.busines,
    },
  };
  lista.push(newid);
  res.json(newid);
});

// listando usuarios
app.get('/listando', (req: Request, res: Response) => {
  res.json(lista);
});

app.listen(3000, () => {
  console.log('SERVER RUN:3000');
});
