var estagios = {
    0: {
        descricao: "Inicio",
        imp: require("../etapas/inicio"),
    },
    1: {
        descricao: "Vendas",
        imp: require("../etapas/venda"),
    },
    2: {
        descricao: "Confirmacao da Venda",
        imp: require("../etapas/confirmacao"),
    },
    3: {
        descricao: "Forma de Pagamento",
        imp: require("../etapas/pagamento"),
    },
    4: {
        descricao: "Encerramento",
        imp: require("../etapas/encerramento"),
    },
};

exports.step = estagios;