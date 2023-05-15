import joi, { number } from 'joi'

export const rentalSchema = joi.object({
        customerId: joi.number(),
        gameId: joi.number(),
        daysRented:number().greater(0)
})