import { db } from "../database/database.connection.js";

export default async function checkGame(req, res, next) {
  const { name } = req.body;
  try {
    const result = await db.query('SELECT * FROM games WHERE name = $1', [name]);
    
    if (result.rows.length > 0) return res.status(409).send("JOGO JÁ CADASTRADO");
  } catch (error) {
    console.error(error.message);
    return res.status(422).send(error.message);
  }

  next();
}
