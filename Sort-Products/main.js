(function(win, doc){
  'use strict';

  let $selectFilter = doc.querySelector('[data-js="sort"]');
  let $productsList = doc.querySelector('[data-js="products"]');
  let $message = doc.querySelector('[data-js="message"]');
  let messageSort = '';
  let products = [
    {name:'Notebook Asus', price: 2700, rate: 5},
    {name:'Notebook Dell', price: 2500, rate: 1},
    {name:'Notebook CCE', price: 1500, rate: 3},
    {name:'Notebook Samsung', price: 2200, rate: 4},
    {name:'Notebook Acer', price: 2000, rate: 2}
  ];

  
  function app() {
    return {
      init: function init() {
        createList (products);
        $selectFilter.addEventListener('change', function(){
          switch(this.value) {
            case 'biggestPrice':
              return sortBiggestPrice();

            case 'lowestPrice':
              return sortLowestPrice();;

            case 'bestRated':
              return sortbestRated();

            case 'worstRated':
          }   return sortworstRated();
        });
      }
    };

    function sortBiggestPrice() {
      $productsList.innerHTML = '';
      messageSort = createMessage () + 'price ↑' 
      return createList(products.sort(function(a,b){
        return b.price - a.price;
      }));
    }

    function sortLowestPrice() {
      messageSort = createMessage () + 'price ↓'
      $productsList.innerHTML = '';
      return createList(products.sort(function(a,b){
        return a.price - b.price;
      }));
    }

    function sortbestRated() {
      messageSort = createMessage () + 'rating ↑' 
      $productsList.innerHTML = '';
      return createList(products.sort(function(a,b){
        return b.rate - a.rate;
      }));
    }

    function sortworstRated() {
      messageSort = createMessage () + 'rating ↓' 
      $productsList.innerHTML = '';
      return createList(products.sort(function(a,b){
        return a.rate - b.rate;
      }));
    }

    function createList (list) {
      $message.textContent = messageSort;
      list.forEach(function(product){
        $productsList.innerHTML += `<li><span>${product.name}</span><span>R$ ${product.price}</span><span>${product.rate} stars</span></li>`;
      });
    }

    function createMessage () {
      return 'Show products by ';
    }
  }
  
  app().init();
}(window, document));