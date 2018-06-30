var config = {
  apiKey: "AIzaSyA4NSkjwoGdWv3SfqmIIybtnDbLdVXwOkc",
  authDomain: "fireproject-5300d.firebaseapp.com",
  databaseURL: "https://fireproject-5300d.firebaseio.com",
  projectId: "fireproject-5300d",
  storageBucket: "fireproject-5300d.appspot.com",
  messagingSenderId: "883396014749"
};
firebase.initializeApp(config);

let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let btnLogin = document.querySelector('#login');
let btnLogout = document.querySelector('#logout');
let btnCreateAccount = document.querySelector('#createAccount');
let message = document.querySelector('#message');
let infoMsg = document.querySelector('#infoMsg');
let github = document.querySelector('#github');
let facebook = document.querySelector('#facebook');
let google = document.querySelector('#google');


btnCreateAccount.addEventListener('click', function(e) {
  e.preventDefault();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, pass.value)
    .then(function() {
      infoMsg.innerHTML = 'Conta criada!';
    })
    .catch(function(error){
      console.log(error);
      infoMsg.innerHTML = 'Falha ao cadastrar.';
    });
});

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, pass.value)
    .then(function(){
      message.innerHTML = `Wellcome ${email.value}! You are logged!`;
      infoMsg.innerHTML = '';
    })
    .catch(function(error) {
      console.log(error);
      infoMsg.innerHTML = 'Falha ao tentar logar';
    });
});

btnLogout.addEventListener('click', function(e){
  e.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(function() {
      message.innerHTML = 'You are disconnected';
    })
    .catch(function(error) {
      console.log(error);
    });
});

function singIn(provider) {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result){
      console.log(result);
      message.innerHTML = `Wellcome ${result.user.displayName}! You are logged!`;
    })
    .catch(function(error){
      console.log(error);
    });
}

github.addEventListener('click', function(e){
  e.preventDefault();
  let provider = new firebase.auth.GithubAuthProvider();
  singIn(provider);
});

google.addEventListener('click', function(e){
  e.preventDefault();
  let provider = new firebase.auth.GoogleAuthProvider();
  singIn(provider);
});

facebook.addEventListener('click', function(e){
  e.preventDefault();
  let provider = new firebase.auth.FacebookAuthProvider();
  singIn(provider);
});
