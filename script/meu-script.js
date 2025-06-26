const botao = document.getElementById('botao-tema');

botao.addEventListener('click', () => {
  document.body.classList.toggle('tema-claro');

  const icone = botao.querySelector('i');

  if (document.body.classList.contains('tema-claro')) {
    icone.classList.remove('fa-moon');
    icone.classList.add('fa-sun');
  } else {
    icone.classList.remove('fa-sun');
    icone.classList.add('fa-moon');
  }
});

const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
let fonteAumentada = false;

botaoAcessibilidade.addEventListener('click', () => {
  if (!fonteAumentada) {
    document.body.style.fontSize = '1.2em';
    fonteAumentada = true;
  } else {
    document.body.style.fontSize = '';
    fonteAumentada = false;
  }
});


const form = document.getElementById('form-contato');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio real
    alert('Página em construção');
  });