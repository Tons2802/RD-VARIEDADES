// Seleciona todos os elementos com animação
const elementos = document.querySelectorAll('.animar');

// Função que ativa animação
const mostrarNaTela = () => {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topoElemento = el.getBoundingClientRect().top;

    if (topoElemento < alturaTela - 100) {
      el.classList.add('ativo');
    }
  });
};

// Executa ao carregar
window.addEventListener('load', mostrarNaTela);

// Executa ao rolar
window.addEventListener('scroll', mostrarNaTela);