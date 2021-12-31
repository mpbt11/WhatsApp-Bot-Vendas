var estagios = {
    0: {
        descricao: "Inicio",
        app: require("../etapas/01-inicio"),
    },
    1: {
        descricao: "Vendas",
        app: require("../etapas/02-venda"),
    },
    2: {
        descricao: "Confirmacao da Venda",
        app: require("../etapas/03-confirmacao"),
    },
    3: {
        descricao: "Forma de Pagamento",
        app: require("../etapas/04-pagamento"),
    },
    4: {
        descricao: "Encerramento",
        app: require("../etapas/05-encerramento"),
    },
};

exports.step = estagios;