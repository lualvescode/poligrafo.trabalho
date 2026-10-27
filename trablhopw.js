
let perguntas = [
    "Você conhece a vítima?",
    "Você esteve no local do crime no dia da ocorrência?",
    "Você teve alguma discussão com a vítima recentemente?",
    "Você tinha alguma intriga com a vítima?",
    "Você conhece a rotina da vítima?",
    "Você conversou com a vítima no dia do ocorrido?",
    "Você esconde alguma informação sobre o caso?",
    "Você conhece alguém que possa estar envolvido no crime?",
    "Você mudou sua versão dos fatos durante a investigação?",
    "Você sabe de alguma informação que ainda não foi revelada sobre o caso?"
];

let atual = 0;
let sim = 0;

let classificacao;
let mensagem;

mostrarPergunta();

function mostrarPergunta() {
    document.getElementById("pergunta").textContent =
        perguntas[atual];

    document.getElementById("numero").textContent =
        "Pergunta " + (atual + 1) + " de " + perguntas.length;
}

function responder() {
    let resposta = document.getElementById("resposta").value;

    if (resposta == "") {
        alert("Escolha uma resposta!");
        return;
    }

    if (resposta == "sim") {
        sim = sim + 1;
    }

    atual++;

    document.getElementById("resposta").value = "";

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        resultado();
    }
}

function resultado() {
    switch (true) {
        case (sim < 5):
            classificacao = "Inocente";
            mensagem = "As respostas positivas foram poucas.";
            break;

        case (sim == 5):
            classificacao = "Suspeito";
            mensagem = "Existem dúvidas que precisam ser esclarecidas.";
            break;

        case (sim <= 8):
            classificacao = "Cúmplice";
            mensagem = "Foram identificados vários pontos que precisam ser esclarecidos.";
            break;

        default:
            classificacao = "Culpado";
            mensagem = "O resultado indica fortes suspeitas.";
            break;
    }

    document.getElementById("pergunta").textContent =
        "Fim do interrogatório!";

    document.getElementById("numero").textContent =
        "Investigação finalizada";

    document.getElementById("resultado").textContent =
        "Classificação: " + classificacao;

    document.getElementById("mensagem").textContent =
        mensagem + " Respostas Sim: " + sim;

    document.getElementById("resposta").style.display = "none";
    document.getElementById("botaoResponder").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
}

function reiniciarJogo() {
    atual = 0;
    sim = 0;

    document.getElementById("resposta").style.display = "inline-block";
    document.getElementById("botaoResponder").style.display = "inline-block";
    document.getElementById("reiniciar").style.display = "none";

    document.getElementById("resultado").textContent = "";
    document.getElementById("mensagem").textContent = "";
    document.getElementById("resposta").value = "";

    mostrarPergunta();
}
