'use strict';
const validator = (req, res, next) => {
    const { name } = req.query;
    if (name) {
      next();
    } else {
      const error = new Error('Name property missing in the query string');
      error.statusCode = 400;
      next(error);
    }
  };
  module.exports = validator;