function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(document).ready(function() {
  // Adiciona animação de rolagem suave para todos os links dentro do nav
  $('nav a').on('click', function(event) {
      if (this.hash !== '') {
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });
});