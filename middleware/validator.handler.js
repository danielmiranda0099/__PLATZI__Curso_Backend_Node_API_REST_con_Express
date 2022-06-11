const boom = require('@hapi/boom');

function validatorHandle(schema, property){
  //usamos un closure
  return (req, res, next) => {
    // porperty --> [body or params or query]
    const data = req[property];

    const {error} = schema.validate(data);

    if(error) {
      next(boom.badRequest(error));
    }

    next();
  }
}

module.exports = validatorHandle;
