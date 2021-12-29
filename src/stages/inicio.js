const { cardapio } = require("../cardapio/cardapio");
const { db } = require("../models/banco");

function execute(user, msg, contato) {
  stamp = new Date();
  hours = stamp.getHours();

  if (hours >= 18 && hours < 24) {
    time = "Boa noite";
  } else if (hours >= 12 && hours < 18) {
    time = "Boa tarde";
  } else if (hours >= 0 && hours < 12) {
    time = "Bom dia";
  }

  let menu = " CARDAPIO 📝\n\n";

  Object.keys(cardapio).forEach((value) => {
    let element = cardapio[value];
    menu += `${value} - ${element.descricao}   R$ ${element.preco} \n`;
  });

  db[user].stage = 1;

  return [
    menu,
    `${time} ${contato}! Sou uma assistente virtual, irei apresentar o cardápio 📝 Para fazer o pedido basta enviar o codigo do produto.\n\n👉Para adicionar mais itens, é só inserir o código um de cada vez 😃 \n\nAqui é a Maria Paula, estou realizando testes para integração de WhatsApp bot, assim que possível entrarei em contato! 🤣`,
  ];
}

exports.execute = execute;
