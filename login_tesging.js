'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var Joi        = require('joi'),
    request    = require('supertest'),
    expect     = require('chai').expect,
    joiAssert  = require('joi-assert');

const {
    schemaLoginSucesso
} = require('./schema_login.js');

const {
    schemaMessagem
} = require('./schema_filme.js')


const URL_BASE        = "http://www.mocky.io";
const ENDPOINT_LOGIN  = "/v2/5ae1f3742d00000e009d7f8e";
const ENDPOINT_LOGIN_SEM_CAMPO = "/v2/5ae1f4952d000056009d7f93"
const ENDPOINT_LOGIN_CPF_BLOQUADO = "/v2/5ae1f5992d00004e009d7f9c"

const login = {
    "cpf": "223.234.343-34",
    "senha": "12345678"
}

const login_cpf_bloqueado = {
    "cpf": "111.222.333-44",
    "senha": "12345678"
}


describe("Login", function(){
    it("É possível realizar login com sucesso", function(done){
      request(URL_BASE)
      .post(ENDPOINT_LOGIN)
      .send(login)
      .expect('Content-Type', "application/json")
      .end(function (err, response) {
        expect(response.status).to.be.eql(200);
        joiAssert(response.body, schemaLoginSucesso)
        done(err);
      });
    });

    it("Enviar request sem todos os campos obrigatórios", function(done){
        request(URL_BASE)
        .post(ENDPOINT_LOGIN_SEM_CAMPO)
        .send({
            "cpf": "223.234.343-34",
        })
        .expect('Content-Type', "application/json")
        .end(function (err, response) {
          expect(response.status).to.be.eql(400);
          joiAssert(response.body, schemaMessagem)
          done(err);
        });
      });

      it("Usuário com CPF bloqueado!!", function(done){
        request(URL_BASE)
        .post(ENDPOINT_LOGIN_CPF_BLOQUADO)
        .send(login_cpf_bloqueado)
        .expect('Content-Type', "application/json")
        .end(function (err, response) {
          expect(response.status).to.be.eql(401);
          joiAssert(response.body, schemaMessagem)
          done(err);
        });
      });
});