const { cardapio } = require("../cardapio/cardapio");
const { db } = require("../models/banco");

const venda = (user, msg) => {
  if (msg === "*") {
    db[user].stage = 0;

    return ["O pedido foi cancelado 🥺"];
  }

  if (msg === "#") {
    db[user].stage = 2;

    let resumo = "*RESUMO DO PEDIDO* 📃\n\n";
    let total = 0;

    db[user].itens.forEach((value) => {
      resumo += `*${value.descricao}* ---> *R$ ${value.preco}* \n`;

      total += value.preco;
    });

    resumo += "\n👉";
    resumo += ` *Total R$ ${total.toFixed(2)}*`;

    return [
      "Por favor, digite o endereço de entrega.\n• Para *cancelar* digite *. ",
      resumo,
    ];
  }

  if (!cardapio[msg]) {
    return ["Ops... código inválido! Digite novamente."];
  }

  db[user].itens.push(cardapio[msg]);

  return [
    "Digite # para finalizar ou * para cancelar.",
    `**${cardapio[msg].descricao}** adicionado com sucesso!`,
  ];
};
exports.execute = venda;
