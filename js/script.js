//Menu hamburger responsivo
const navSlide = () => {
  const burger = document.querySelector('.burger', '.link');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('open');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s';
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

/////////////////////
//função para ser utilizada quando formulário for validado.
validou = () => {
  window.location.href = "validado.html";
}

//função para validação de cpf gerada no chatGPT
/* */
validarCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g,''); // remove qualquer caractere que não seja número
  if(cpf == '') return false; // verifica se o CPF está vazio
  // valida o CPF usando uma expressão regular
  var cpfRegex = /^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})$/;
  if (!cpfRegex.test(cpf)) {
    return false;
  }
  // calcula os dígitos verificadores
  var cpfSemDV = cpf.substring(0, 9);
  var dv1 = calcularDV(cpfSemDV);
  var dv2 = calcularDV(cpfSemDV + dv1);
  // verifica se os dígitos verificadores são válidos
  if (cpf.charAt(9) != dv1 || cpf.charAt(10) != dv2) {
    return false;
  }
  return true;
}

function calcularDV(cpfSemDV) {
  var soma = 0;
  for (var i = 0; i < cpfSemDV.length; i++) {
    soma += parseInt(cpfSemDV.charAt(i)) * (cpfSemDV.length + 1 - i);
  }
  var resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

////////////

//Validação de emails
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
validaEmail = (email) => {
  if (!emailRegex.test(email)) {
    return false;
  }
  else{
    return true;
  }
}
////////////

validarFormulario1 = (event) => {

  event.preventDefault();

  var nome = document.forms["meuForm1"]["nome"].value;
  var sobrenome = document.forms["meuForm1"]["sobrenome"].value;
  var email = document.forms["meuForm1"]["email"].value;
  var telefone = document.forms["meuForm1"]["telefone"].value;
  var senha = document.forms["meuForm1"]["senha"].value;
  var senha2 = document.forms["meuForm1"]["senha2"].value;
  var endereco = document.forms["meuForm1"]["endereco"].value;
  var dataNasc = document.forms["meuForm1"]["data"].value;
  var sexo = document.forms["meuForm1"]["sexo"].value;
  var cpf = document.forms["meuForm1"]["cpf"].value;

  if (validaEmail(email) == false) {
    alert("Por favor, informe um email válido.");
    return false;
  }

  else if (senha.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres.");
    return false;
  }

  else if (senha2 != senha){
    alert("A senha e a confirmação não coincidem!")
    return false;
  }

  else if (validarCPF(cpf) == false){
    alert("CPF inválido!\nDigite um existente.")
    return false;
  }

  else{
    validou();
  }

}


//Produtos
validarFormulario2 = (event) => {

  event.preventDefault();

  var nome = document.forms["meuForm3"]["nome"].value;
  var codigo = document.forms["meuForm3"]["cod"].value;
  var preco = document.forms["meuForm3"]["preco"].value;
  var quantidade = document.forms["meuForm3"]["quant"].value;
  var marca = document.forms["meuForm3"]["marca"].value;
  var cat = document.forms["meuForm3"]["cat"].value;
  var forn = document.forms["meuForm3"]["forn"].value;
  var dataForn = document.forms["meuForm3"]["dataForn"].value;
  var custo = document.forms["meuForm3"]["custo"].value;
  var cor = document.forms["meuForm3"]["cor"].value;
  var desc = document.forms["meuForm3"]["desc"].value;

  
}


//Funcionário
validarFormulario3 = (event) => {

  event.preventDefault();

  var nome = document.forms["meuForm3"]["nome"].value;
  var endereco = document.forms["meuForm3"]["end"].value;
  var email = document.forms["meuForm3"]["email"].value;
  var telefone = document.forms["meuForm3"]["telefone"].value;
  var cpf = document.forms["meuForm3"]["cpf"].value;
  var rg = document.forms["meuForm3"]["rg"].value;
  var data = document.forms["meuForm3"]["data"].value;
  var data2 = document.forms["meuForm3"]["data2"].value;
  var salario = document.forms["meuForm3"]["salario"].value;
  var cargo = document.forms["meuForm3"]["cargo"].value;

  

  if (validaEmail(email) == false){
    alert("Por favor, informe um email válido.");
    return false;
  }

  else{
    validou();
  }
}