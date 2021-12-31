const { db } = require("../models/banco");

const encerramento = (user, msg) => {
  db[user].stage = 0;
  return [
    "Para mais informações, entre em contato 📱 (14)99801-8683",
    "Estamos preparando o seu pedido! Por favor aguarde para saborear o melhor açai da cidade! 🫐",
  ];
};

exports.execute = encerramento;