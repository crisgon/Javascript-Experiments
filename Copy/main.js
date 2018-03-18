(function(win, doc){
  'use strict';

  let $textToCopy = doc.querySelector('[data-js="inputText"]');
  let $messaeH2 = doc.querySelector('[data-js="message"]');

  let $buttonSelect = doc.querySelector('[data-js="buttonSelect"]');
  let $buttonCopy = doc.querySelector('[data-js="buttonCopy"]');




  function app () {
    return {
      init: function init () {
        fillTextarea ();
        allEvents();
      }
    };
  }

  function allEvents () {
    $buttonSelect.addEventListener('click', select);
    $buttonCopy.addEventListener('click', copy);
  }

  function fillTextarea () {
    for (let index = 0; index <= 100; index++) {
      $textToCopy.value += index + ' ';
    }
  }

  function select () {
    $textToCopy.select();
  }

  function getMouseSelection () {
    let textSelected = win.getSelection().toString();
    return textSelected;
  }

  function copy () {
    getMouseSelection();
    doc.execCommand('copy');
    message();
  }

  function message () {
    $messaeH2.textContent = 'Your copy is: ' + getMouseSelection();
  }

  app().init();
}(window, document));