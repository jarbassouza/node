"use strict";

const ValidationContract = require("../validators/fluent-validator");
const repository = require("../repositories/customer-repository");


exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(eq.body.name,3,"O nome deve ter, no mínimo, 3 caracteres");
    contract.isEmail(req.body.email,"E-mail inválido");
    contract.hasMinLen(req.body.password,6,"A senha deve ter, no mínimo, 6 caracteres");
  
    // Se os dados forem invalidos
    if (!contract.isValid()) {
      res.status(400).send(contract.errors()).end();
      return;
    }
  
    try {
      await repository.create(req.body);
      res.status(201).send({
        message: "Cliente Cadastrado Com Sucesso!",
      });
    } catch (e) {
      res.status(500).send({
        message: "Falha ao processar requisição",
      });
    }
  };