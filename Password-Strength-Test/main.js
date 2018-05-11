const inpPass = document.querySelector('#pass');
const confirmPass = document.querySelector('#confirmPass');
const requisites = document.querySelectorAll('.requisites li');
const message = document.querySelector('#message');
const regNumbers = /[0-9]/;
const regCapitalLetter = /[A-Z]/;

inpPass.addEventListener('input', function(){
  this.value ? passStrong(this.value) : removeStyle();
})

confirmPass.addEventListener('input', function(){
  confirm();
})

function passStrong(pass) {
  checkList(requisites, pass);
  if(pass.length >= 6) {
    if(!!pass.match(regNumbers) && !!pass.match(regCapitalLetter)){
      return strongPassStyle();
    }
  
    else if(!!pass.match(regNumbers) || !!pass.match(regCapitalLetter)){
      return mediumPassStyle();
    }
  }

  return weakPassStyle();
}

function strongPassStyle() {
  requisites.forEach(req => {
    req.classList.add('approved');
  });
  document.documentElement.style.setProperty("--requisite1", "#4cd137");
  document.documentElement.style.setProperty("--requisite2", "#4cd137");
  document.documentElement.style.setProperty("--requisite3", "#4cd137");
}

function mediumPassStyle() {
  document.documentElement.style.setProperty("--requisite1", "#fbc531");
  document.documentElement.style.setProperty("--requisite2", "#fbc531");
  requisites[0].classList.add('approved');
  requisites[1].classList.add('approved');
  requisites[2].classList.remove('approved');
}

function weakPassStyle() {
  document.documentElement.style.setProperty("--requisite1", "#e84118");
  requisites[0].classList.add('approved');
  requisites[1].classList.remove('approved');
  requisites[2].classList.remove('approved');
}

function removeStyle() {
  requisites.forEach(req => {
    req.classList.remove('approved');
    req.style.color = "#dcdde1";
  });
}

function checkList(req, pass) {
  req.forEach(r => {
    r.style.color = "#4cd137";
  });

  if(pass.length < 6) {
    req[0].style.color = "#dcdde1";
  }
  if(!pass.match(regCapitalLetter)) {
    req[1].style.color = "#dcdde1";
  }
  if(!pass.match(regNumbers)) {
    req[2].style.color = "#dcdde1";
  }
}


function confirm(pass) {
  if(confirmPass.value !== inpPass.value) {
    message.innerHTML = "Passwords do not match"
    message.style.color = "#e84118"
  }else {
    message.innerHTML = "The passwords match"
    message.style.color = "#4cd137"
  }
}