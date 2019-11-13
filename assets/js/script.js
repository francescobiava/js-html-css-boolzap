$(document).ready(function () {
  
  searchContact();
  sendButton();
  conversation();

});

// FUNCTIONS
function conversation() {
  var scroll = 0;
  // al click sul pulsante per inviare
  $('#send-button').click(function() {
    // se c'è un messaggio scritto
    if ($('.type-message input').val() !== '') {
      // salvo l'orario
      var x = new Date();
      var hours = x.getHours();
      var minutes = x.getMinutes();
      // recupero il messaggio scritto dall'utente
      var message = $('.type-message input').val();
      // inserisco il messaggio e l'orario nella copia presa dal template e aggiungo la classe per messaggio inviato
      var liMessage = $('#template li').clone().addClass('sent-message');
      liMessage.find('.message-text').text(message);
      liMessage.find('.message-time').text(hours + ':' + minutes);
      // appendo dove mi serve
      $('.conversation ul').append(liMessage);
      // svuoto l'input
      $('.type-message input').val('');
      // scroll
      scroll += $('#main .conversation li').height();
      $('#main .conversation ul').scrollTop(scroll);
      // inserisco la scritta che l'altro sta scrivendo
      $('#main .name-conversation p').text('typing...');
      // richiamo la funzione per ricevere il messaggio dopo 1 secondo
      setTimeout(receiveMessage, 1000);
    }
  });
  // quando premo enter
  $(document).on('keydown',function(e) {
    if(e.which == 13) {
      // se c'è un messaggio scritto
      if ($('.type-message input').val() !== '') {
        // salvo l'orario
        var x = new Date();
        var hours = x.getHours();
        var minutes = x.getMinutes();
        // recupero il messaggio scritto dall'utente
        var message = $('.type-message input').val();
        // inserisco il messaggio e l'orario nella copia presa dal template e aggiungo la classe per messaggio inviato
        var liMessage = $('#template li').clone().addClass('sent-message');
        liMessage.find('.message-text').text(message);
        liMessage.find('.message-time').text(hours + ':' + minutes);
        // appendo dove mi serve
        $('.conversation ul').append(liMessage);
        // svuoto l'input
        $('.type-message input').val('');
        // scroll
        scroll += $('#main .conversation li').height();
        $('#main .conversation ul').scrollTop(scroll);
        // inserisco la scritta che l'altro sta scrivendo
        $('#main .name-conversation p').text('typing...');
        // richiamo la funzione per ricevere il messaggio dopo 1 secondo
        setTimeout(receiveMessage, 1000);
      }  
    }
  });
}

function receiveMessage() {
  // salvo l'orario
  var x = new Date();
  var hours = x.getHours();
  var minutes = x.getMinutes();
  // prendo struttura da template, inserisco classe per messaggio ricevuto e aggiungo testo e orario
  var liMessage = $('#template li').clone().addClass('received-message');
  liMessage.find('.message-text').text('Hello there!');
  liMessage.find('.message-time').text(hours + ':' + minutes);
  // appendo dove mi serve
  $('.conversation ul').append(liMessage);
  // scroll
  scroll += $('#main .conversation li').height();
  $('#main .conversation ul').scrollTop(scroll);
  // setto l'ultimo accesso
  $('#main .name-conversation p').text('last seen today at ' + hours + ':' + minutes);
}

function sendButton() {
  // quando premo un tasto all'interno dell'input
  $('.type-message input').keyup(function() {
    // in base al fatto che l'input sia pieno o vuoto cambio l'icona del pulsante per inviare
    if ($('.type-message input').val() !== '') {
      $('#send-button').removeClass('fa-microphone').addClass('fa-paper-plane');
    }
    if ($('.type-message input').val() == '') {
      $('#send-button').addClass('fa-microphone').removeClass('fa-paper-plane');
    }
  });
}

function searchContact () {
  // quando premo un tasto all'interno dell'input
  $('.search-box input').keyup(function() {
    // se l'input non è vuoto
    if ($('.search-box input').val() !== '') {
      // cambio l'icona
      $('.search-box i').removeClass('fa-search').addClass('fa-arrow-left');
      // salvo l'input e rendo tutto minuscolo
      var search = $('.search-box input').val().toLowerCase();
      // ciclo per ogni contatto
      $('.chats h4').each(function() {
        // rendo tutto minuscolo
        var contact = $(this).text().toLowerCase();
        // se l'elemento non contiene l'input allora lo nascondo altrimento lo rendo visibile(per quando cancello caratteri)
        if (!contact.includes(search)) {
          $(this).parents('li').hide();
        } else {
          $(this).parents('li').show();
        }
      })
    }
    // se l'input è vuoto torno a situazione iniziale in cui sono visibili tutti
    if ($('.search-box input').val() == '') {
      $('.search-box i').addClass('fa-search').removeClass('fa-arrow-left');
      $('.chats li').show();
    }
  });
}