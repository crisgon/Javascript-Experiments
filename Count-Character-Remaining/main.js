(function(win, doc){
  'use strict';

  const $textarea = doc.querySelector('[data-js="tweet-text"]');
  const $message = doc.querySelector('[data-js="message"]');
  let messageLenght = 50;

  function app() {
    return {
      init() {
        this.maxWord(50);
        $textarea.addEventListener('keyup', (event)=>{
          this.remaining(event);
        });
      },

      maxWord(max) {
        $textarea.setAttribute("maxlength", max);
      },
      
      remaining(event) {
        let textLenght = $textarea.value.length;
        if(event.keyCode === 8)
          --$message.textContent;
        $message.textContent = messageLenght - textLenght;
      }
    };
  }
  app().init();
}(window, document));