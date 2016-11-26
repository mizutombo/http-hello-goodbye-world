const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const server = require('../http-server');

describe('test my httpCowSayFiglet server', () => {

  const request = chai.request(server);

  it('test "happy_cow" url', done => {
    request
      .get('/happy_cow') // error ... app.address is not a function
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body, 'hello wonderful world');
        done();
      });
  });

  it('test "angry_cow" url', done => {
    request
      .get('/angry_cow') // error ... app.address is not a function
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body, 'eat cow pies and die!!!');
        done();
      });
  });

  it('test "halloween" url', done => {
    request
      .get('/halloween') // error ... app.address is not a function
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body, 'happy halloween');
        done();
      });
  });

});
