const { cardapio } = require("../cardapio/cardapio");
const { db } = require("../models/banco");

const inicio = (user, msg) => {
  now = new Date();
  hours = now.getHours();

  resetItems(user);

  if (hours >= 18 && hours < 24) {
    time = "Boa noite";
  } else if (hours >= 12 && hours < 18) {
    time = "Boa tarde";
  } else if (hours >= 0 && hours < 12) {
    time = "Bom dia";
  }

  let menu = " *NOSSO CARDÁPIO* 📝\n\n";

  Object.keys(cardapio).forEach((value) => {
    let element = cardapio[value];
    menu += `${value} - ${element.descricao}   R$ ${element.preco} \n`;
  });

  db[user].stage = 1;

  return [
    menu,
    `${time}! Meu nome é Paula, sua assistente virtual da loja. Vou lhe mostrar o nosso cardápio 📝
    \nPor favor, envie o código do produto para eu anotar aqui...\n
    \n🗣 Aaaa.. Para adicionar mais itens, é só *inserir um código por vez!*`,
  ];
};
const resetItems = (user) => {
  return (db[user].itens = []);
};

exports.execute = inicio;
