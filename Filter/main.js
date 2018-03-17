(function(win, doc){
  'use strict';

  let $searchInput = doc.querySelector('[data-js="searchInput"]');
  let $listBooks = doc.querySelector('[data-js="listBooks"]');
  let allBooks = ['Harry Potter', 'Sherlock', 'A Cabana', 'Game of Thrones', 'Use a cabeça: Python', 'As crônicas de Nárnia', 'Javascript: O guia definitivo', 'Os segredos do ninja javascript', 'Princípios de Orientação a Objetos em JavaScript'];


  function app () {
    return {
      init: function init () {
        fillList(allBooks, $listBooks);
        $searchInput.addEventListener('keyup', filter);
      }
    };
  }

  function fillList (list, ul) {
    let li = '';
    Array.prototype.forEach.call(list, function(item){
      li += `<li>${item}</lig>`
    });

    return ul.innerHTML = li; 
  }

  function hasOnList (bookSearch, book) {
    let regexBook = new RegExp (bookSearch, 'gi');
    return regexBook.test(book);
  }

  function filter() {
    let booksFilteres = Array.prototype.filter.call(allBooks, function(item){
      return hasOnList($searchInput.value, item);
    });

    fillList(booksFilteres, $listBooks);
  }

  app().init();

}(window, document));
