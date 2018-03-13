(function(doc, win){
  'use strict';
  let $inputUpload = document.querySelector('[data-js="inptUpload"]');
  let $image = document.querySelector('[data-js="image"]')
  let $fileName = document.querySelector('[data-js="fileName"]');
  let readFile = new FileReader();
  
  
  $inputUpload.addEventListener('change', function(){
    let file = $inputUpload.files[0];

    readFile.onloadend = function(){
      $image.src = readFile.result;
    }
      
    readFile.readAsDataURL(file);

    $fileName.textContent = $inputUpload.files[0].name;
  });
}(window, document));