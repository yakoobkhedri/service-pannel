// delete alert

let deleteIcon = Array.from(document.getElementsByClassName('delete'));

deleteIcon.forEach((item) => {
  item.addEventListener('click', function () {
    confirm('مطمئنی که میخوایی حذف کنی؟');
  })
})
// goback
function goback(event) {
  event.preventDefault();
  add_modal.classList.remove('active');
  overlay.classList.remove('show');
}
// toggle check

let check = Array.from(document.querySelectorAll('.check div'));

check.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
  })
})

// open menu

let profile = document.getElementById('profile');
let close = document.getElementById('close');
let overlay2 = document.getElementById('overlay2');
let header = document.querySelector('header');

profile.addEventListener('click', function () {
  header.classList.add('active');
  overlay2.classList.add('active');
})
close.addEventListener('click', function () {
  header.classList.remove('active');
  overlay2.classList.remove('active');
})
overlay2.addEventListener('click',function () {
  overlay2.classList.remove('active');
  header.classList.remove('active');
})
// add user

let add_modal = document.getElementById('add-user-modal');
let overlay = document.getElementById('overlay');

function addUser() {
  add_modal.classList.add('active');
  overlay.classList.add('show');
  overlay.addEventListener('click', function () {
    add_modal.classList.remove('active');
    this.classList.remove('show');
  })
}
// jalali date

jalaliDatepicker.startWatch();

// circle progressbar

let number = document.getElementById('number');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let counter = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {
  if(counter==65){
    clearInterval()
  }else{
    counter += 1;
    number.innerHTML = counter;
  }
},20);
setInterval(() => {
  if(counter2==95){
    clearInterval()
  }else{
    counter2 += 1;
    number2.innerHTML = counter;
  }
},20);
setInterval(() => {
  if(counter3==2225){
    clearInterval()
  }else{
    counter3 += 1;
    number3.innerHTML = counter;
  }
},20);