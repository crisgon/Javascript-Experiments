(function(win, doc){
  'use strict';

  let $input = doc.querySelectorAll('[data-js="starRate"]');
  let $noteMessage = doc.querySelector('[data-js="note"]');
  let max;
  let ant;

  function app () {
    return {
      init: function init () {
        addEvents();
      }
    };

    function addEvents () {
      Array.prototype.forEach.call($input, (item)=> {
        item.addEventListener('click', rate, false);
      });
    }
    
    function rate () {
      max = this.value;
      removeRate();
      for(let i = 0; i < max; i++){
        $input[i].checked = true;
      }    
      message(max);
    }
  
    function removeRate () {
      for(let i = 0; i < $input.length; i++){
        $input[i].checked = false;
      }    
    }
  
    function message () {
      $noteMessage.textContent = `Your note was ${max}`
    }
  }

  app().init();
}(window, document));