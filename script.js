var tabela = document.getElementById("tabelaJogadores");
var contentHTML = "";
var pontosVitoria = 3;
var pontosEmpate = 1;
var pontosDerrota = -1;
var qJogadas = 0;
var quantidadeJogadas = document.getElementById("quantidadeJogadas");

elemento = [];

function gerarTabela() {
  var exibirJogadas = `<span>Quantidade de jogadas: ${qJogadas}</span>`;
  var exibirHTML = "";
  tabela.innerHTML = "";

  var classificao = elemento.length;
  for (var i = 0; i < elemento.length; i++) {
    exibirHTML += `
      <tr>
        <td>${elemento[i].nome}</td>
        <td>${elemento[i].vitorias}</td>
        <td>${elemento[i].empates}</td>
        <td>${elemento[i].derrotas}</td>
        <td>${elemento[i].pontos}</td>
        <td><button id="btnVitoria" onClick="adicionarVitoria(${i})">Vitória + 3</button></td>
        <td><button id="btnVitoria" onClick="adicionarEmpate(${i})">Empate + 1</button></td>
      <td><button id="btnVitoria" onClick="adicionarDerrota(${i})">Derrota - 1</button></td>
      </tr>`;
  }

  tabela.innerHTML = exibirHTML;
  quantidadeJogadas.innerHTML = exibirJogadas;
}

function calcularPontos() {
  for (var i = 0; i < elemento.length; i++) {
    elemento[i].pontos =
      elemento[i].vitorias * pontosVitoria +
      elemento[i].empates * pontosEmpate +
      elemento[i].derrotas * pontosDerrota;
  }
}

function adicionaNomes() {
  var nome = document.getElementById("nomes");
  if (nome.value == "") {
    alert("Preencha o nome do jogador!");
  } else if (qJogadas != 0) {
    alert("Jogo iniciado. Para adicionar mais jogadores reinicie a partida.");
  } else {
    elemento.push({
      nome: nome.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
    nome.value = "";
    gerarTabela();
  }
}

function adicionarVitoria(index) {
  if (elemento.length < 2) {
    alert("Número insuficiente de jogadores!");
  } else {
    qJogadas++;
    for (var i = 0; i < elemento.length; i++) {
      if (index == i) {
        elemento[i].vitorias++;
      } else elemento[i].derrotas++;
    }
    calcularPontos();
    gerarTabela();
  }
}

function adicionarEmpate(index) {
  if (elemento.length < 2) {
    alert("Número insuficiente de jogadores!");
  } else {
    qJogadas++;
    elemento.forEach((jogador) => {
      jogador.empates++;
    });
    gerarTabela();

    calcularPontos();
    gerarTabela();
  }
}
function adicionarDerrota(index) {
  if (elemento.length < 2) {
    alert("Número insuficiente de jogadores!");
  } else {
    qJogadas++;
    for (var i = 0; i < elemento.length; i++) {
      if (index == i) {
        elemento[i].derrotas++;
      } else elemento[i].vitorias++;
    }
    calcularPontos();
    gerarTabela();
  }
}

function limparDados(elemento) {
  elemento.vitorias = 0;
  elemento.empates = 0;
  elemento.derrotas = 0;
  elemento.pontos = 0;
}

function zerarTabela() {
  for (var i = 0; i < elemento.length; i++) {
    var jogador = elemento[i];
    limparDados(jogador);
  }
  qJogadas = 0;
  gerarTabela(jogador);
  ganhador = 0;
}

function reset() {
  qJogadas = 0;
  elemento = [];
  tabela.innerHTML = "";
  resultado.innerHTML = "";
  quantidadeJogadas.innerHTML = "";
}

function encerrarPartida() {
  if (elemento.length < 2) {
    alert("Número insuficiente de jogadores!");
  } else {
    const vencedor = elemento.reduce(function (prev, current) {
      return prev.pontos > current.pontos ? prev : current;
    });
    var ganhador = document.getElementById("resultado");

    if (qJogadas == 0) {
      alert("Inicie a partida!");
    }

    if (vencedor.pontos == vencedor.pontos) {
      ganhador.innerHTML = "A partida Empatou!";
    } else {
      ganhador.innerHTML =
        "O campeão é " +
        vencedor.nome +
        ", com " +
        vencedor.pontos +
        " pontos!";
    }
  }
}

function resutado(i) {}