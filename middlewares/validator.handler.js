
function validatorHandler(schema, property){
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            console.log("error", message);
            res.status(422).json({ error: message })
        }
    }
}

module.exports = validatorHandler;