(function(win, doc){
  'use strict';
  const $images = doc.querySelectorAll('[data-js="slide-items"] img');
  const $prev = doc.querySelector('[data-js="prev"]');
  const $next = doc.querySelector('[data-js="next"]');
  let move = 0;
  
  function app() {
    return {
      init(){
        $next.addEventListener('click', nextSlide);
        $prev.addEventListener('click', prevSlide);
      }
    };
    function nextSlide() {
      move += 100;
      if(move >= 500)
        move = 0;
      $images.forEach(element => {
        element.style.transform = `translateX(-${move}px)`;
      });
    }
  
    function prevSlide() {
      move -= 100;
      if(move < 0) 
        move = 0;
      $images.forEach(element => {
        element.style.transform = `translateX(-${move}px)`;
      });
    }
  }
  app().init();
}(window, document));