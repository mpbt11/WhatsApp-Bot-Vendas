const { db } = require("../models/banco");

function execute(user, msg) {
  if (msg === "@") {
    db[user].stage = 2;
    return [
      "Digite novamente o endereço de entrega ou para cancelar digite * ",
    ];
  }

  if (msg === "*") {
    db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "1") {
    db[user].stage = 4;
    return ["Digite o valor em dinheiro para levarmos o troco: "];
  }

  if (msg === "2") {
    db[user].stage = 4;
    return ["OK! O entregador estará com a maquininha em mãos 👍 "];
  }

  if (msg === "3") {
    db[user].stage = 4;
    return ["Chave do PIX aqui 431.804.398-31"];
  }
}

exports.execute = execute;
