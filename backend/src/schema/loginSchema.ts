import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required().empty().messages({
    'any.required': '"email" is required',
    'string.base': '"email" must be a string',
    'string.empty': '"email" is not allowed to be empty',
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().empty().messages({
    'any.required': '"password" is required',
    'string.base': '"password" must be a string',
    'string.empty': '"password" is not allowed to be empty',
    'string.min': '"password" length must be 6 characters long',
  }),
});
