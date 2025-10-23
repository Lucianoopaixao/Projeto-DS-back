import express from "express";
import cors from "cors";
import mysql from "mysql2";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

//criando instancia prisma
const prisma = new PrismaClient();
//crinando a aplicação express
const app = express();
app.use(cors());
app.use(express.json());

//criando uma ROTA para o front requerir do back as perguntas do quiz
app.get("/quiz", async (req, res) => {
  try {
    const results = await Prisma.questoes.findMany();
    res.json(results);
  } catch (erro) {
    console.error("Deu erro", erro);
    return res.status(500).json({
      error: "Erro no servidor",
      details: erro.message,
    });
  }
});

app.listen(3001, () =>
  console.log("Servidor está rodando corretamente na porta 3001")
);
