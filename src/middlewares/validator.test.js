const validator = require('./validator');

describe('validator middleware', () => {
  it('should call next() if name is provided in the query string', () => {
    const req = { query: { name: 'John' } };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should call next() with an error if name is not provided in the query string', () => {
    const req = { query: {} };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Name property missing in the query string',
        statusCode: 400,
      })
    );
  });
});