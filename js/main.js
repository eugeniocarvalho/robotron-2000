controle = document.querySelectorAll('.controle-ajuste');

controle.forEach(elemento => {
  elemento.addEventListener('click', evento =>{
    input = evento.target.parentNode.querySelector('.controle-contador');
    
    manipulaDados(evento.target.textContent, input);
  });
});

function manipulaDados(operacao, input) {
  if (operacao === '+')
    input.value = parseInt(input.value) + 1;
  else
    if (parseInt(input.value) > 0)
      input.value = parseInt(input.value) - 1;
}