import express from "express";
import cors from "cors";
import mysql from "mysql2";

//crinando a aplicação express
const app = express();
app.use(cors());
app.use(express.json());

//conectando com o banco de dados mysql
const db = mysql.createConnection({
  host: "localhost", //no localhost
  user: "root",
  password: "", //n defini senha
  database: "saudeemjogo",
});

//ver se vai funcionar esse db ne se n vou me matar
db.connect((erro) => {
  if (erro) {
    console.error("Deu errado", erro);
  } else {
    console.log("Deu certo!");
  }
});

//criando uma ROTA para o front requerir do back as perguntas do quiz
app.get("/quiz", (req, res) => {
  //funcao get
  db.query("SELECT * FROM questoes", (erro, results) => {
    if (erro) {
      return res.status(500).json({ error: erro }); //retornando status 500(erro) se tudo der certo
    }
    res.json(results);
  });
});

app.listen(3001, () =>
  console.log("Servidor está rodando corretamente na porta 3001")
);
