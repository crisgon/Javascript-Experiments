


    let $inputName = document.querySelector('[data-js="inputName"]');
    let $btnAddName = document.querySelector('[data-js="btnAddName"]');
    let $listNames = document.querySelector('[data-js="listNames"]')
    let allNames = [];
    
    if(getNames('listName'))
      window.addEventListener('load', () => showNameList('listName'));

    $btnAddName.addEventListener('click', event => {
      event.preventDefault();
      addName(allNames, $inputName);
      clearInput($inputName);
      saveList(allNames);
      showNameList('listName')
    })

    function addName (listName, name) {
      listName.push(name.value);
    }

    function clearInput (input) {
      input.value = '';
    }

    function saveList (names) {
      localStorage.setItem('listName', allNames.join(','));
    }
    
    function getNames(names) {
      let namesList = localStorage.getItem(names);
      return namesList;
    }

    function showNameList () {
      createHtml(getNames('listName'));
    }

    function createHtml (namesList) {
      names = namesList.split(',').map(item => {
        return  `<li>${item}</li>`;
      }).join('');
      $listNames.innerHTML = names;
    }