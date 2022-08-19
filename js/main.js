controle = document.querySelectorAll('[data-controle]');
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
}

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    input = evento.target.parentNode.querySelector('[data-contador');

    manipulaDados(evento.target.dataset.controle, input);
  });
});

function manipulaDados(operacao, input) {
  if (operacao === '+')
    input.value = parseInt(input.value) + 1;
  else
    if (parseInt(input.value) > 0)
      input.value = parseInt(input.value) - 1;
}