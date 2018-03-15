(function(win, doc){
  'use strict';
  let $plans = doc.querySelector('[data-js="plans"]');
  let $messageH2 = doc.querySelector('[data-js="message"]');
  let $prices = doc.querySelector('[data-js="prices"]');
  let option = $plans.querySelectorAll('option');

  $plans.addEventListener('change', () => {
    changeSelected();
    message();
  });

  function changeSelected(){
    for (let index = 0; index < option.length; index++) {

      if($plans[index].selected)
        return $prices[index].selected = true;
    }
  }

  function message () {
    return $messageH2.textContent = `Your plan is ${$plans.value} and costs R$ ${$prices.value}`;
  }
 
}(window, document));