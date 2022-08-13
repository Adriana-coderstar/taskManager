import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required().empty().messages({
    'any.required': 'Email is required',
    'string.base': 'Email must be a string',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be a valid email',
  }),
  password: Joi.string().min(6).required().empty().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password length must be 6 characters long',
  }),
});
