(function(win, doc){
  let $imgDrag = doc.querySelectorAll('[data-js="imgDrag"]');
  let $animalZone = doc.querySelector('[data-js="animalsDropZone"]');
  let $fruitZone = doc.querySelector('[data-js="fruitsDropZone"]');

  function start() {
    return {
      init: function init () {
        dragAllElements($imgDrag);
        addAdropOnElement($animalZone);
        addAdropOnElement($fruitZone);
      }
    };

    function dragAllElements(elements) {
      elements.forEach(element => {
        element.addEventListener('dragstart', dragStart);;
        element.addEventListener('dragend', dragEnd);
      });
    }

    function addAdropOnElement(element) {
      element.addEventListener('dragover', allowDrop);
      element.addEventListener('drop', drop);
    }

    function dragStart(event) {
      event.dataTransfer.setData('arg', event.target.id);
      this.style.opacity = '.6';
    }
  
    function dragEnd() {
      this.style.opacity = '1';
    }
  
    function allowDrop(event) {
      event.preventDefault();
    }
  
    function drop(event) {
      let item = event.dataTransfer.getData('arg');
      event.target.appendChild(doc.getElementById(item));
    }
  }
  
  start().init();
}(window, document));
