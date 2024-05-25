const { userSchema, furnizorSchema, productSchema, reviewSchema } = require('../validators/schemas');

const validatePayload = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

module.exports = validatePayload;
