const bot = require("venom-bot");
const { db } = require("../src/models/banco");
const { step } = require("./models/etapas");

bot.create().then((client) => start(client));

const start = (client) => {
  client.onMessage((message) => {
    let resp = step[getStage(message.from)].app.execute(
      message.from,
      message.body,
      message.sender.name
    );

    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
};

const getStage = (user) => {
  db[user]
    ? db[user].stage
    : (db[user] = {
        stage: 0,
        itens: [],
      });
  return db[user].stage;
};
