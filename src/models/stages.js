var stages = {
    0: {
        descricao: "Inicio",
        imp: require("../stages/inicio"),
    },
    1: {
        descricao: "Vendas",
        imp: require("../stages/venda"),
    },
    2: {
        descricao: "Confirmacao da Venda",
        imp: require("../stages/confirmacao"),
    },
    3: {
        descricao: "Forma de Pagamento",
        imp: require("../stages/pagamento"),
    },
    4: {
        descricao: "Encerramento",
        imp: require("../stages/encerramento"),
    },
};

exports.step = stages;