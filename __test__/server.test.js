'use strict';
const {app} = require('../src/server');
const supertest = require("supertest");
const request = supertest(app);

// describe("API Server ", () => {
//     it("getting data from home route /", async () => {
//         const response = await request.get('/');
//         expect(response.status).toEqual(200);
//         expect(response.text).toEqual("hello from home route");
//     });

// });


describe('Testing Express App', () => {
    it('should respond with 404 on a bad route', async () => {
      const response = await request.get('/bad-route');
      expect(response.status).toBe(404);
    });
  
    it('should respond with 404 on a bad method', async () => {
      const response = await request.post('/');
      expect(response.status).toBe(404);
    });
  
    it('should respond with 500 if no name in the query string', async () => {
      const response = await request.get('/person');
      expect(response.status).toBe(500);
    });
  
    it('should respond with 200 if the name is in the query string', async () => {
      const name = 'John';
      const response = await request.get(`/person?name=${name}`);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(name);
    });
  
    it('should return the correct output object if the name is in the query string', async () => {
      const name = 'John';
      const response = await request.get(`/person?name=${name}`);
      expect(response.body).toEqual({ name });
    });
  });