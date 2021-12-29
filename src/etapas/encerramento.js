const { db } = require("../models/banco");

const encerramento = (user, msg) => {
  db[user].stage = 0;
  return [
    "Preparando o seu pedido! Por favor aguarde para saborear o melhor açai da cidade! 🫐",
    "Para mais informações, entre em contato 📱 (14)99801-8683",
    "Dê uma olhadinha no nosso perfil do Instagram [@user], sempre tem sorteio por lá! Fique de olho! 👀"
  ];
}

exports.execute = encerramento;
