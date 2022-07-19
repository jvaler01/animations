let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.addEventListener('click', myFunction);

let open = false;
function myFunction() {
  container.classList.toggle('active');
  if (!open) {
    open = true;
    setTimeout(function () {
      document.getElementById('test').classList.toggle('show');
    }, 650);
  } else {
    open = false;
    document.getElementById('test').classList.toggle('show');
  }
}
