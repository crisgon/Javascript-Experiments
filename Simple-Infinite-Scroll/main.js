(function(win, doc){
  'use strict';
  let $text = doc.querySelector('[data-js="posts"]');
  let num = 1;

  
  function app() {
    return {
      init(){
        createPage()
        win.addEventListener('scroll', insertNew);
      }
    };

    function lorem(num) {
      return `<div>
                <h2>Article ${num}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, deserunt modi enim quo est laboriosam. Praesentium, repellendus voluptates facilis reiciendis fuga ab est similique doloribus accusamus tempore quia voluptate nam.</p>
            </div>`;
    }
  
    function createPage() {
      for(num; num < 5; num++ ){
        $text.innerHTML += lorem(num);
      }
    }
  
    function insertNew() {
      if(needScroll())
        $text.innerHTML += lorem(++num);
    }
  
    function needScroll() {
      let scrollPos = window.pageYOffset;
      let pageHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      return pageHeight - (scrollPos + clientHeight) < 50;
    }
  }

  app().init();
}(window, document));