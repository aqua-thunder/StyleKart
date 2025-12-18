const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next();
    } catch (error) {
        const status = 422;
        const message = "Fill the input properlly"
        const extraDetails = error.issues[0].message
        const err = { 
            status,
            message, 
            extraDetails
        }
        console.log(err)
        next(err)
    }
}

module.exports = validate;  