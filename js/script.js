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


validarFormulario = () => {
  var nome = document.forms["meuForm"]["nome"].value;
  var sobrenome = document.forms["meuForm"]["sobrenome"].value;
  var email = document.forms["meuForm"]["email"].value;
  var telefone = document.forms["meuForm"]["telefone"].value;
  var senha = document.forms["meuForm"]["senha"].value;
  var senha2 = document.forms["meuForm"]["senha2"].value;
  var endereco = document.forms["meuForm"]["endereco"].value;
  var dataNasc = document.forms["meuForm"]["data"].value;
  var sexo = document.forms["meuForm"]["sexo"].value;
  var cpf = document.forms["meuForm"]["cpf"].value;

  var campos = [nome, sobrenome, email, senha, senha2, endereco, dataNasc, sexo, cpf];

  for (var i = 0; i < campos.length; i+=1){
    if (campos[i] == ""){
      alert("Algum campo está vazio. \nReveja e preencha!");
      break;
      return false;
    }
  }

  //função para validação de cpf gerada no chatGPT
/* */
  function validarCPF(cpf) {
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

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
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

  else if

}