$(document).ready(function () {
  
  sendButton();
  conversation();

});

// FUNCTIONS
function conversation() {
  var scroll = 0;
  $('#send-button').click(function() {
    if ($('.type-message input').val() !== '') { 
      // recupero il messaggio scritto dall'utente
      var message = $('.type-message input').val();
      // inserisco il messaggio nella copia presa dal template e aggiungo al li la classe per messaggio inviato
      var liMessage = $('#template li').clone().addClass('sent-message');
      liMessage.find('span').text(message);
      // appendo dove mi serve
      $('.conversation ul').append(liMessage);
      // svuoto l'input
      $('.type-message input').val('');
      // scroll
      scroll += $('#main .conversation li').height();
      $('#main .conversation ul').scrollTop(scroll);
      setTimeout(receiveMessage, 1000);
    }
  });
  $(document).on('keydown',function(e) {
    if(e.which == 13) {
      if ($('.type-message input').val() !== '') { 
        // recupero il messaggio scritto dall'utente
        var message = $('.type-message input').val();
        // inserisco il messaggio nella copia presa dal template e aggiungo al li la classe per messaggio inviato
        var liMessage = $('#template li').clone().addClass('sent-message');
        liMessage.find('span').text(message);
        // appendo dove mi serve
        $('.conversation ul').append(liMessage);
        // svuoto l'input
        $('.type-message input').val('');
        // scroll
        scroll += $('#main .conversation li').height();
        $('#main .conversation ul').scrollTop(scroll);
        setTimeout(receiveMessage, 1000);
      }  
    }
  });
}

function receiveMessage() {
  // prendo struttura da template, inserisco classe per messaggio ricevuto e aggiungo testo
  var liMessage = $('#template li').clone().addClass('received-message');
  liMessage.find('span').text('Hello there!');
  // appendo dove mi serve
  $('.conversation ul').append(liMessage);
  // scroll
  scroll += $('#main .conversation li').height();
  $('#main .conversation ul').scrollTop(scroll);
}

function sendButton() {
  $('.type-message input').keyup(function() {
    if ($('.type-message input').val() !== '') {
      $('#send-button').removeClass('fa-microphone').addClass('fa-paper-plane');
    }
    if ($('.type-message input').val() == '') {
      $('#send-button').addClass('fa-microphone').removeClass('fa-paper-plane');
    }
  });
}