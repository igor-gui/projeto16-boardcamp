import { db } from "../database/database.connection.js";

export default async function checkCostumer(req, res, next) {
  const { cpf } = req.body;
  try {
    const result = await db.query('SELECT * FROM costumers WHERE cpf = $1', [cpf]);
    
    if (result.rows.length > 0) return res.status(409).send("CLIENTE JÁ CADASTRADO");
  } catch (error) {
    console.error(error.message);
    return res.status(422).send(error.message);
  }

  next();
}
