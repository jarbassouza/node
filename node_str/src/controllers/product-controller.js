"use strict";

const ValidationContract = require("../validators/fluent-validator");
const repository = require("../repositories/product-repository");

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};

exports.getBySlug = async (req, res, next) => {
  try {
    var data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};
exports.getByTag = async (req, res, next) => {
  try {
    const data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    eq.body.title,
    3,
    "O título deve ter, no mínimo, 3 caracteres"
  );
  contract.hasMinLen(
    req.body.slug,
    3,
    "O slug deve ter, no mínimo, 3 caracteres"
  );
  contract.hasMinLen(
    req.body.description,
    3,
    "A descricão deve ter, no mínimo, 3 caracteres"
  );

  // Se os dados forem invalidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create(req.body);
    res.status(201).send({
      message: "Produto Cadastrado Com Sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
      message: "Produto Atualizado Com Sucesso",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: "Produto Removido Com Sucesso",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar requisição",
    });
  }
};
