fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('container-hero').innerHTML = data;
  });

  document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});
