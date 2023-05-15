import Joi from 'joi';

const customerSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.number().required(),
  cpf: Joi.number().length(11).required(),
  birthday: Joi.date().required(),
});

export default customerSchema;
