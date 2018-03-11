  const $form = document.querySelector('[data-js="form"]');
  const $cpfInput = document.querySelector('[data-js="cpf"]');
  const $cpfList = document.querySelector('[data-js="cpfs"]');
  
  $form.addEventListener('submit', function(event){
    event.preventDefault();
    showCpfs(validateCpf($cpfInput), $cpfInput);
  });



  function validateCpf (cpf) {
    let regexCpf = /\d{3}\d{3}\d{3}\d{2}/;
    return !!cpf.value.split(/\D/).join('').match(regexCpf);
  }

  function changeInputBorderColor (cpfValid, input) {
    if(!cpfValid)
      return input.style.border = '2px solid red'
    return input.style.border = '2px solid green'
  }

  function showCpfs (verifyCpf, cpf) {
    let $cpfH2 = `<h2>${cpf.value}</h2>`;
    if(verifyCpf)
      $cpfList.innerHTML += $cpfH2;
    return changeInputBorderColor(verifyCpf, $cpfInput);
  }