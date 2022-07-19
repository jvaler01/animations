let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.addEventListener('click', myFunction);

let open = false;
function myFunction() {
  if (!open) {
    open = true;
    toggleBtn.classList.toggle('active');
    setTimeout(function () {
      toggleBtn.classList.toggle('expand');
    }, 1000);
    setTimeout(function () {
      document.getElementById('test').classList.toggle('show');
    }, 1500);
  } else {
    open = false;
    document.getElementById('test').classList.toggle('show');
    toggleBtn.classList.toggle('expand');
    setTimeout(function () {
      toggleBtn.classList.toggle('active');
    }, 1000);
  }
}
