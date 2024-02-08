const form = document.getElementById('card-form');

form.addEventListener('submit', (e) => {
  console.log(new FormData(form));
  e.preventDefault();
});
