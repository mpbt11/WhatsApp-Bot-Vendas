const { db } = require("../models/banco");

function execute(user, msg) {
  if (msg === "*") {
    db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg !== "*") {
    db[user].stage = 3;

    return [
      "✅Se estiver tudo certinho, escolha a forma de pagamento:\n1️⃣-Dinheiro\n2️⃣-Cartão\n3️⃣-PIX. \n\n❗️Para editar o endereço, digite @. \n❗️Para cancelar digite *.",
    ];
  }
}

exports.execute = execute;
