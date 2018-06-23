let users = [];
let userPerPage = 5;
let startOfList = 0;
let endOfList = userPerPage;
let listUser = document.querySelector('.users');
let paginationControls = document.querySelectorAll('.pagination ul li');

window.addEventListener('load',() => {
  getUsers();
  controls();
  setTimeout(mountUserList, 2000);
  paginationControls[0].classList.add('active');
});

function getUsers() {
  fetch('https://randomuser.me/api/?results=40')
    .then(response => response.json())
    .then(data => {
      users.push(...data.results);
  });
}

function mountUserList() {
  let showUsers = users.slice(startOfList, endOfList);
  return listUser.innerHTML = showUsers.map(user => {
    return `<li class="user-card animate">
      <img src="${user.picture.thumbnail}" alt="">
      <h3>${user.name.first + user.name.last}</h3>
      <span>${user.email}</span>
    </li>`;
  }).join('');
}

function controls() {
  paginationControls.forEach(function(item, index){
    item.classList.remove('active');
    item.addEventListener('click', function(){
      controls();
      rangeUsersPerPage(index, item);
      mountUserList();
    });
  });  
}

function rangeUsersPerPage(index, item) {
  if(!index) {
    startOfList = 0;
    endOfList = userPerPage;
    item.classList.add('active');
  }else {
    item.classList.add('active');
    startOfList = userPerPage * index;
    endOfList = startOfList + userPerPage;
  }
}