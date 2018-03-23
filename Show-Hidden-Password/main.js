(function(win, doc){
  'use strict';

  let $inputPass = doc.querySelector('[data-js="inputPass"]');
  let $btnPass = doc.querySelector('[data-js="btnPass"]');
  let toggle = true;

  function app () {
    return {
      init() {
        $btnPass.addEventListener('click', () => {
          this.isClicked();
          this.changeBtnValue();
          this.showOrHiddenPass();
        });
      },

      isClicked() {
        return toggle = !toggle;
      },

      changeBtnValue() {
        return this.isClicked() ?
          $btnPass.textContent = 'Hidden':
          $btnPass.textContent = 'Show';
      },

      showOrHiddenPass() {
        return !this.isClicked() ?
        $inputPass.setAttribute('type', 'text')
        :$inputPass.setAttribute('type', 'password');
      },

    };
  }

  app().init();

}(window, document));