(function(win, doc){
  'use strict';

  let $listNames = doc.querySelector('[data-js="inputNames"]');
  let $randomButton = doc.querySelector('[data-js="randomButton"]');
  let $randomName = doc.querySelector('[data-js="nameRandom"]');
  let $countRandomName = doc.querySelector('[data-js="countNameRandom"]');
  let $lastRandomName = doc.querySelector('[data-js="lastNameRandom"]');

  let regexToGetNames = /.+/gim;
  let countRandomName = 0;
  let allNames = [];
  let examples = ['Rosario Hendren', 'Timika Steiger','Joanne Harman'];
  let randomName;
  
  function app () {
    // Example list of names
    fillInput();

    return {
      init: function init () {
       $listNames.addEventListener('change', resetCount);
       
        $randomButton.addEventListener('click', function(event){
          event.preventDefault();
          randomName = randomNameInList(getAllNames($listNames.value));
          countRandomNames ()
          showRandomName(randomName);
          lastRandomName(randomName);
        });
      }
    };

    function randomNameInList (listNames) {
      let randomNumber = Math.round(Math.random() * (listNames.length - 1));
      return listNames[randomNumber];
    }
  
    function getAllNames (allNames) {
      return allNames.match(regexToGetNames);
    }
  
    function showRandomName(name) {
      return $randomName.textContent = `Random name: ${name}`;
    }
  
    function countRandomNames () {
      countRandomName++;
      return $countRandomName.textContent = `Number of random names: ${countRandomName}`;
    }
    
    function lastRandomName (name) {
      allNames.push(name);
      let lastName;
      allNames.length === 1 
      ? lastName = allNames[0]
      : lastName = allNames.splice(allNames.length -2, 1)[0];

      return $lastRandomName.textContent = `The last random name was: ${lastName}`;
    }

    function fillInput () {
      return examples.forEach(function(name) {
        $listNames.value += name + '\n';
      });
    }

    function resetCount() {
      countRandomName = 0;
    }
    
  }

  app().init();
})(window, document);