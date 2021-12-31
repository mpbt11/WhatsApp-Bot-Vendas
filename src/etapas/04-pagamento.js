const { db } = require("../models/banco");

const pagamento = (user, msg) => {

  if (msg === "@") {
    db[user].stage = 2;
    return ["Digite novamente o endereço de entrega.\n• Para *cancelar* digite *. "];
  }

  if (msg === "*") {
    db[user].stage = 0;
    return ["O pedido foi cancelado 🥺"];
  }

  if (msg === "1") {
    db[user].stage = 4;
    return ["Digite o valor em dinheiro para o troco: "];
  }

  if (msg === "2") {
    db[user].stage = 4;
    return ["OK! O entregador estará com a máquininha em mãos! 🛵"];
  }

  if (msg === "3") {
    db[user].stage = 4;
    return ["Aqui está a chave do PIX *14998018683*. Por favor envie o comprovante!"];
  }
};

exports.execute = pagamento;