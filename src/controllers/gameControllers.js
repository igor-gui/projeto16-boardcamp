import { db } from "../database/database.connection.js";

export async function getGames(req, res) {
    try {
        const games = await db.query(`SELECT * games;`);
        return res.send(games.rows);
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
}

export async function postGame(req, res) {
    const { body } = res.locals;
    try {
        await db.query(
            `
            INSERT INTO games (name, stockTotal, pricePerDay)
            VALUES ($1, $2, $3)
            `,
            [body.name, body.stockTotal, body.pricePerDay]
        );
        return res.status(201).send("Jogo inserido com sucesso")
    } catch (error) {
        console.log(err.message);
        res.send(err.message);
    }
}