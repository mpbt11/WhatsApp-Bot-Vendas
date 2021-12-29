const bot = require("venom-bot");
const { db } = require("../src/models/banco");
const { step } = require("../src/models/stages");

bot.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    let resp = step[getStage(message.from)].imp.execute(
      message.from,
      message.body,
      message.sender.name
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
}

function getStage(user) {
  if (db[user]) {
    return db[user].stage;
  } else {
    db[user] = {
      stage: 0,
      itens: [],
    };
    return db[user].stage;
  }
}