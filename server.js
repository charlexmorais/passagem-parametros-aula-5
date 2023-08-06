const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json()); 

let lista = [
  {
    id: uuidv4(),
    nome: "",
    age: '',
    email:"",
    profile:{
      type:"",
      credit:"",
      busines:""
    }
  },
];

// cadastrando usuario
app.post("/cadastrando", (req, res) => {
  const { nome, age, email, profile } = req.body;


  if (!nome || !age || !email || !profile || !profile.type || !profile.credit || !profile.busines) {
    return res.status(400).json({ error: "Erro no cadastro. Todos os campos são obrigatórios." });
  }

  const newid = {
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
app.get("/listando", (req, res) => {
  res.json(lista);
});

app.listen(3000, () => {
  console.log("SERVER RUN:3000");
});
