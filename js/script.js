$(document).ready(function() {

// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$('.col').click(function()
  {
    var colonnaColorata = this;

    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",

        success: function(data) {
          var numeroRandom = data.response;

          $(colonnaColorata).text(numeroRandom);

          if (numeroRandom <= 5) {
            $(colonnaColorata).addClass('yellow');
          } else {
            $(colonnaColorata).addClass('green')
          }
        },

        error: function() {
          alert("Errore");
        }

      }
    );
  }
);

});
