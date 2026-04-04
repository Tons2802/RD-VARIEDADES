const gruposDeProdutos = [
  [
    { nome: "SABÃO LÍQUIDO OMEX 5L VALÊNCIA", codigo: "1041", imagem: "IMG/1.png" },
    { nome: "DESINFETANTE 5L VALÊNCIA BRISA", codigo: "1029", imagem: "IMG/3.png" },
    { nome: "ENROLADOR DE MANGUEIRA DE CHÃO", codigo: "1102", imagem: "IMG/5.png" }
  ],
  [
    { nome: "LIMPA PEDRA 5L VALÊNCIA", codigo: "1035", imagem: "IMG/2.png" },
    { nome: "ESPONJA MÁGICA TIRA MANCHAS", codigo: "1013", imagem: "IMG/4.png" },
    { nome: "LIMPA TETO DE NYLON C/CABO", codigo: "1092", imagem: "IMG/7.png" }
  ]
];

let grupoAtual = 0;

function renderizarProdutos() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  gruposDeProdutos[grupoAtual].forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${produto.imagem}">
      <h3>${produto.nome}</h3>
      <span>Código: ${produto.codigo}</span>
    `;

    grid.appendChild(card);
  });
}

function trocarProdutos() {
  const grid = document.getElementById("product-grid");

  // fade out
  grid.classList.add("fade-out");

  setTimeout(() => {
    grupoAtual = (grupoAtual + 1) % gruposDeProdutos.length;

    renderizarProdutos();

    // fade in
    grid.classList.remove("fade-out");
    grid.classList.add("fade-in");

    setTimeout(() => {
      grid.classList.remove("fade-in");
    }, 500);

  }, 500);
}

window.addEventListener("load", () => {
  renderizarProdutos();

  setInterval(trocarProdutos, 5000);
});
