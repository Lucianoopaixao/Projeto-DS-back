import express from "express";
import cors from "cors";
import mysql from "mysql2";

//crinando a aplicação express
const app = express();
app.use(cors());
app.use(express.json());

//conectando com o banco de dados mysql
