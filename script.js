// ===== ECOBIKE SP =====

// 1. CALCULAR O VALOR
function calcularValor(horas, tipo) {
  const preco = {
    urbana: 12,
    eletrica: 20,
    cargo: 25,
  };

  let total = horas * preco[tipo];

  if (horas > 5) {
    total *= 0.9;
  }

  return total;
}

// 2. FORMATAR O DINHEIRO
function formatarMoeda(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

// 3. SELECIONAR OS ELEMENTOS DO HTML
const inputHoras = document.querySelector("#horas");
const selectTipo = document.querySelector("#tipo");
const btnCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

const inputNome = document.querySelector("#nome");
const btnAdicionar = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");
const total = document.querySelector("#total");

const btnTema = document.querySelector("#btnTema");

// 4. MOSTRAR O RESULTADO DO SIMULADOR
function mostrarResultado() {
  const horas = Number(inputHoras.value);
  const tipo = selectTipo.value;

  if (!Number.isFinite(horas) || horas <= 0) {
    resultado.textContent = "Informe um número de horas válido";
    return;
  }

  const valor = calcularValor(horas, tipo);

  resultado.textContent = "Valor total: " + formatarMoeda(valor);
}

// 5. ATUALIZAR O CONTADOR
function atualizarContador() {
  total.textContent = lista.children.length;
}

// 6. ADICIONAR RESERVAS
function adicionarReserva() {
  const nome = inputNome.value.trim();

  if (nome === "") {
    alert("Digite seu nome primeiro!");
    return;
  }

  const li = document.createElement("li");

  li.textContent = nome;

  const btnRemover = document.createElement("button");

  btnRemover.textContent = "Remover";

  btnRemover.addEventListener("click", function () {
    li.remove();
    atualizarContador();
  });

  li.appendChild(btnRemover);

  lista.appendChild(li);

  inputNome.value = "";

  atualizarContador();
}

// 7. MODO ESCURO
function alternarTema() {
  document.body.classList.toggle("dark");
}

// 8. EVENTOS DOS BOTÕES
btnCalcular.addEventListener("click", mostrarResultado);

btnAdicionar.addEventListener("click", adicionarReserva);

btnTema.addEventListener("click", alternarTema);
