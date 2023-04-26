
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const inputs = form.querySelectorAll("input, textarea");

  const adicionarMensagemErro = (campo) => {
    const p = document.createElement('p');
    p.innerText = 'campo obrigatório';
    p.classList.add('erro');
    campo.classList.add('erro');
    campo.parentNode.insertBefore(p, campo.nextSibling);
  };

  inputs.forEach(function(input) {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
      if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("erro")) {
        adicionarMensagemErro(input);
      }
    } else {
      input.style.borderColor = "green";
      const mensagemObrigatoria = input.nextElementSibling;
      if (mensagemObrigatoria && mensagemObrigatoria.classList.contains("erro")) {
      }
    }
  });
  console.log(inputs, 'inputs')
});


