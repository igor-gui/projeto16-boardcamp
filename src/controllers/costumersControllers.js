import { db } from "../database/database.connection.js";

export async function getCostumers(req, res) {
  try {
    const costumers = await db.query(`SELECT * FROM costumers`);
    return res.send(costumers)
  } catch (error) {
    console.log(error.message);
    res.status(422).send(res.message);
  }
}

export async function getCostumerById(req, res) {
  const { id } = req.params;
  try {
    await db.query(`SELECT * FROM costumers WHERE id=$1`, [id])
  } catch (err) {
    console.log(err.message);
    return res.status(422).send(err.message)
  }
}

export async function postCustomer(req, res) {
  const { body } = req;
  try {
    await db.query(
      `
        INSERT INTO customers (name, phone, cpf, birthday)
        VALUES ($1, $2, $3, $4)
        `,
      [body.name, body.phone, body.cpf, body.birthday]
    );
    return res.status(201).send("Cliente inserido com sucesso");
  }
  catch (error) {
    console.error(error.message);
    return res.status(422).send(error.message);
  }
}

export async function updateCustomer(req, res) {
  const { id } = req.params;
  const { name, phone, cpf, birthday } = req.body;

  try {
    const result = await db.query(
      `
        UPDATE customers
        SET name = $1, phone = $2, cpf = $3, birthday = $4
        WHERE id = $5
        `,
      [name, phone, cpf, birthday, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send({ error: 'Customer not found' });
    }

    return res.status(200).send();
  } catch (error) {
    console.error(error.message);
    return res.status(422).send();
  }
}
