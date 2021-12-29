const { db } = require("../models/banco");

function execute(user, msg) {
  db[user].stage = 0;
  return [
    "Obrigada pela preferencia 🥰",
    "Aguarde, seu pedido chegará em breve",
    "Mais informações ligue para (14)99801-8683",
  ];
}

exports.execute = execute;
