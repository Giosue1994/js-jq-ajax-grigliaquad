$(document).ready(function() {

// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
stampaBox();
$('.box').click(function()
  {
    var boxColorato = this;

    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",

        success: function(data) {
          var numeroRandom = data.response;

          $(boxColorato).text(numeroRandom);

          if (numeroRandom <= 5) {
            $(boxColorato).removeClass('green').addClass('yellow');
          } else {
            $(boxColorato).removeClass('yellow').addClass('green');
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

function stampaBox() {

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  for (var i = 1; i <= 36; i++) {

    var context = {};
    var html = template(context);

    $('.container').append(html);

  }

}
