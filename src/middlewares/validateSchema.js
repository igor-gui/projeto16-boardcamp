export default function validateSchema(schema, string) {

    return (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false})
        if(error){
            const errorMessages = error.details.map((detail => detail.message))
            return res.status(422).send(errorMessages)
        }
        if(string === '/cadastro' || string === '/login') res.locals.routeName = string;
        next()
    }
}