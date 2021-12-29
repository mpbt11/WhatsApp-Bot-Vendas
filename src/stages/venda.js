const { cardapio } = require("../cardapio/cardapio");
const { db } = require("../models/banco");

function execute(user, msg) {
  if (msg === "*") {
    db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    db[user].stage = 2;

    let resumo = "  RESUMO DO PEDIDO ✅\n";
    let total = 0;
    db[user].itens.forEach((value) => {
      console.log(value);
      resumo += `${value.descricao} ----------------  R$ ${value.preco} \n`;

      total += value.preco;
    });

    resumo += "-------------------------\n";
    resumo += ` Total R$ ${total} 💵`;

    return ["Digite o endereço de entrega ou para cancelar digite * ", resumo];
  }

  if (!cardapio[msg]) {
    return [
      "Código inválido, digite corretamente",
      "Digite # para finalizar ou * para cancelar",
    ];
  }

  db[user].itens.push(cardapio[msg]);

  return [
    "Digite # para finalizar ou * para cancelar",
    `Item **${cardapio[msg].descricao}** adicionado com sucesso!`,
  ];
}

exports.execute = execute;
