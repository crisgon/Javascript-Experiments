let inputText = document.querySelector('[data-js="input"]');
let btnCheck = document.querySelector('[data-js="checkbox"]');

btnCheck.addEventListener('change', disableInput);

function disableInput () {
  if(this.checked)
    return inputText.setAttribute('disabled', 'true');
  
  return inputText.removeAttribute('disabled');
}