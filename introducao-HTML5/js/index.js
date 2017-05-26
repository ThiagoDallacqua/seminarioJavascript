var dropdown = document.querySelector(".iconeDropdown");
var subPaginas = document.querySelector(".subPaginas");

dropdown.addEventListener('click', function(e){
  e.preventDefault();

  subPaginas.classList.toggle('mostraMenu');
});
