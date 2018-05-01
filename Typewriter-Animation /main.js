(function(win, doc){
  const text = doc.querySelector('[data-js="text-writer"]');
  const textContent = text.innerHTML;
  const lettersOfText = [...textContent];
  let isWrite = false;
  
  function writer(text){
    text.innerHTML = '';
    lettersOfText.forEach((letter, index) => {
      setTimeout(()=>{
        text.innerHTML += letter;
      }, 100 * index);
    });
  }

  function eraser(textArr){
    textArr.forEach((letter, index) => {
      setTimeout(()=> {
        textArr.pop();
        text.innerHTML = textArr.join('');
      }, 100 * index);
    });
    textArr = [...textContent];
  }

  (function initAnimation(){
    writer(text);
    setInterval(()=>{
      if(isWrite){
        isWrite = !isWrite;
        writer(text);
        }else{
          isWrite = !isWrite;
          eraser(lettersOfText);
        }
    }, 4000);
  }());
}(window, document));
