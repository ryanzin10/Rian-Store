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

//mascara no CPF
function formatCpf(cpf) {
  cpf = cpf.replace(/\D/g, ""); // Remove tudo que não é número
  if (cpf.length > 11) { // Verifica se o CPF tem mais de 11 dígitos
    cpf = cpf.slice(0, 11); // Se tiver, remove os dígitos extras
  }
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Insere ponto após os primeiros 3 números
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Insere outro ponto após os próximos 3 números
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere hífen e os últimos 2 números
  
  return cpf;
}


const cpfInputs = document.querySelectorAll(".inputCpf");

cpfInputs.forEach(function(cpfInput) {
  cpfInput.addEventListener("input", function(e) {
    let cpf = e.target.value;
    cpf = formatCpf(cpf);
    e.target.value = cpf;
  });
});


////////////

//mascara cnpj
function formatCnpj(cnpj) {
  cnpj = cnpj.replace(/\D/g, ""); // Remove tudo que não é número
  if (cnpj.length > 14) { // Verifica se o CNPJ tem mais de 14 dígitos
    cnpj = cnpj.slice(0, 14); // Se tiver, remove os dígitos extras
  }
  cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2"); // Insere ponto após os primeiros 2 números
  cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2"); // Insere outro ponto após os próximos 3 números
  cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2"); // Insere barra após os próximos 3 números
  cnpj = cnpj.replace(/(\d{4})(\d{1,2})$/, "$1-$2"); // Insere hífen e os últimos 2 números
  
  return cnpj;
}

const cnpjInputs = document.querySelectorAll(".inputCnpj");

cnpjInputs.forEach(function(cnpjInput) {
  cnpjInput.addEventListener("input", function(e) {
    let cnpj = e.target.value;
    cnpj = formatCnpj(cnpj);
    e.target.value = cnpj;
  });
});


///////////

//mascara para telefones
function formatTelefone(telefone) {
  telefone = telefone.replace(/\D/g, ""); // Remove tudo que não é número
  if (telefone.length > 11) { 
    telefone = telefone.slice(0, 11); 
  }
  telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); // Insere parênteses após os primeiros 2 números
  telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2"); // Insere hífen e os últimos 4 números
  telefone = telefone.replace(/(\d)(\d{4})$/, "$1 $2"); // Insere espaço entre o 9º e o 10º dígito
  return telefone;
}

const telefoneInputs = document.querySelectorAll(".inputTel");

telefoneInputs.forEach(function(telefoneInput) {
  telefoneInput.addEventListener("input", function(e) {
    let telefone = e.target.value;
    telefone = formatTelefone(telefone);
    e.target.value = telefone;
  });
});


///////////

//mascara para preços
formatPreco = (preco) => {
  preco = preco.replace(/\D/g, ""); // Remove tudo que não é número
  preco = preco.replace(/(\d{2})$/, ",$1"); // Adiciona a vírgula após os dois últimos dígitos
  preco = preco.replace(/(\d+)(\d{3},\d{2})/, "$1.$2"); // Adiciona o ponto a cada grupo de 3 dígitos antes da vírgula
  preco = "R$ " + preco; // Adiciona o símbolo de real
  return preco;
}

const precoInputs = document.querySelectorAll(".inputPreco");

precoInputs.forEach(function(precoInput) {
  precoInput.addEventListener("input", function(e) {
    let preco = e.target.value;
    preco = formatPreco(preco);
    e.target.value = preco;
  });
});

///////////

//mascara para insta
formatInsta = (insta) => {
  insta = insta.replace(/[^a-zA-Z0-9._]/g, "");
  insta = "@" + insta;
  return insta;
}

const instagram = document.querySelectorAll(".insta");

instagram.forEach(function(instaInput) {
  instaInput.addEventListener("input", function(e) {
    let insta = e.target.value;
    insta = formatInsta(insta);
    e.target.value = insta;
  });
});

//////////
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
validarFormulario = (event) => {
  event.preventDefault();

  var email = document.forms["meuForm1"]["email"].value;
  var senha = document.forms["meuForm1"]["senha"].value;

  if (validaEmail(email) == false) {
    alert("Por favor, informe um email válido.");
    return false;
  }
  else if (senha.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres.");
    return false;
  }
  else{
    window.location.href = "index.html";
  }
}

///////////
validarFormulario1 = (event) => {

  event.preventDefault();

  var email = document.forms["meuForm1"]["email"].value;
  var senha = document.forms["meuForm1"]["senha"].value;
  var senha2 = document.forms["meuForm1"]["senha2"].value;
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

  validou();
  
}


//Funcionário
validarFormulario3 = (event) => {

  event.preventDefault();

  var email = document.forms["meuForm3"]["email"].value;
  var cpf = document.forms["meuForm3"]["cpf"].value;  

  if (validaEmail(email) == false){
    alert("Por favor, informe um email válido.");
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

validarFormulario4 = (event) => {

  event.preventDefault();

  var email = document.forms["meuForm4"]["email"].value;

  if (validaEmail(email) == false) {
    alert("Por favor, informe um email válido.");
    return false;
  }

  else{
    validou();
  }

}