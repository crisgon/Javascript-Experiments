(function(win, doc){
  'use strict';

  let $button = doc.querySelector('[data-js="button"]');
  let $message = doc.querySelector('[data-js="message"]');
  let count = 10;
  let url = 'https://crisgon.github.io'

  win.addEventListener('load', time);

  $button.addEventListener('click',(evente)=>{
    event.preventDefault();
    return redirect(url);
  }, false);

  function redirect (url) {
    return win.location = url;
  }

  function time () {
    setTimeout(function() {
      if(count < 1)
        return redirect(url);
      count--;
      time();
      showMessage();
    }, 1000);
  }

  function showMessage () {
    $message.textContent = `Redirecting in ${count} seconds...`;
  }

}(window, document));
