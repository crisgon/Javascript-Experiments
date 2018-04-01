(function(win, doc){
  'use strict';
  let profiles = [
    {
      name: 'Sakura', 
      age: 19, 
      picture: 'https://myanimelist.cdn-dena.com/images/characters/9/69275.jpg'
    },
    {
      name: 'Hinata Hyuuga', 
      age: 18, 
      picture: 'https://myanimelist.cdn-dena.com/images/characters/6/278736.jpg'
    },
    {
      name: 'Ino Yamanaka', 
      age: 19, 
      picture: 'https://myanimelist.cdn-dena.com/images/characters/9/60062.jpg'
    },
    {
      name: 'Nami', 
      age: 20, 
      picture: 'https://myanimelist.cdn-dena.com/images/characters/2/263249.jpg'
    },
    {
      name: 'Yoko Littner', 
      age: 23, 
      picture: 'https://myanimelist.cdn-dena.com/images/characters/14/34848.jpg'
    }
  ];
  const $cards = doc.querySelector('[data-js="cards"]');
  let $singleCard;

  function app() {
    creatCards();
    return {
      init() {
        win.addEventListener('load', ()=> {
          swipeCard();
          btnReject();
          btnAccept();
        });
      }
    };

    function creatCards() {
      let cardsHTML = profiles.map(profile => {
        return `    <div class="card" data-js="card">
                      <img src="${profile.picture}" alt="">
                      <div class="card-info">
                        <h2>${profile.name}</h2>
                        <span>${profile.age}</span>
                      </div>
                      <div class="card-control">
                        <button data-js="reject" class="reject-btn">✖</button>
                        <button data-js="accept" class="accept-btn">❤</button>
                      </div>
                    </div>`;
      }).join('');
      $cards.innerHTML = cardsHTML;
    }

    function swipeCard() {
      $singleCard = doc.querySelectorAll('[data-js="card"]');
      Array.prototype.forEach.call($singleCard, item => {
        let hammertime = new Hammer(item);
        swipeLeft(hammertime, item);
        swipeRight(hammertime, item);
      });
    }
  
    function reject(item) {
      item.classList.add('reject');
    }
  
    function accept(item) {
      item.classList.add('accept');
    }
  
    function swipeLeft(ham, item) {
      ham.on('panleft', event =>
        reject(item)
      );
    }
  
    function swipeRight(ham, item) {
      ham.on('panright', event =>
        accept(item)
      );
    }
  
    function btnReject() {
      let btnReject = Array.prototype.map.call($singleCard, item => {
        return item.querySelector('[data-js="reject"]');
      }).forEach(item => 
        item.addEventListener('click', ()=> 
          reject(item.parentNode.parentNode)
        )
      );
    }
  
    function btnAccept() {
      let btnAccept = Array.prototype.map.call($singleCard, item => {
        return item.querySelector('[data-js="accept"]');
      }).forEach(item => 
        item.addEventListener('click', ()=>
          accept(item.parentNode.parentNode)
        )
      );
    }
  }

  app().init();
}(window, document));