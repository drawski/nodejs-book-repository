var request = require('supertest');
var assert = require('assert');
var stockRepository = require('../stockInMemoryRepository')();
var app = require('../app')(stockRepository);

describe('POST /stock', function() {
    it('respond with json', function(done) {
        request(app)
            .post('/stock')
            .set('Accept', 'application/json')
            .send({
                "isbn": "1234567890",
                "count": 5
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, response) {
                if (err) {
                    done();
                }
                assert.equal(response.body.ok, 1);
                done();
            });
    });
});
