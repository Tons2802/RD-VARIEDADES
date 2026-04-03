const gruposDeProdutos = [
  [
    { nome: "Produto 1", codigo: "001", imagem: "img/produto1.jpg" },
    { nome: "Produto 2", codigo: "002", imagem: "img/produto2.jpg" },
    { nome: "Produto 3", codigo: "003", imagem: "img/produto3.jpg" }
  ],
  [
    { nome: "Produto 4", codigo: "004", imagem: "img/produto4.jpg" },
    { nome: "Produto 5", codigo: "005", imagem: "img/produto5.jpg" },
    { nome: "Produto 6", codigo: "006", imagem: "img/produto6.jpg" }
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

  setInterval(trocarProdutos, 3500);
});
