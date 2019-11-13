$(document).ready(function () {
  
  searchContact();
  sendButton();
  conversation();

});

// FUNCTIONS
function conversation() {
  var scroll = 0;
  $('#send-button').click(function() {
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
      $('#main .name-conversation p').text('typing...');
      setTimeout(receiveMessage, 1000);
    }
  });
  $(document).on('keydown',function(e) {
    if(e.which == 13) {
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
        setTimeout(receiveMessage, 1000);
        $('#main .name-conversation p').text('typing...');
      }  
    }
  });
}

function receiveMessage() {
  // salvo l'orario
  var x = new Date();
  var hours = x.getHours();
  var minutes = x.getMinutes();
  // prendo struttura da template, inserisco classe per messaggio ricevuto e aggiungo testo
  var liMessage = $('#template li').clone().addClass('received-message');
  liMessage.find('.message-text').text('Hello there!');
  liMessage.find('.message-time').text(hours + ':' + minutes);
  // appendo dove mi serve
  $('.conversation ul').append(liMessage);
  // scroll
  scroll += $('#main .conversation li').height();
  $('#main .conversation ul').scrollTop(scroll);
  $('#main .name-conversation p').text('last seen today at ' + hours + ':' + minutes);
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

function searchContact () {
  $('.search-box input').keyup(function() {
    if ($('.search-box input').val() !== '') {
      $('.search-box i').removeClass('fa-search').addClass('fa-arrow-left');
      var search = $('.search-box input').val().toLowerCase();
      $('.chats h4').each(function() {
        var contact = $(this).text().toLowerCase();
        if (!contact.includes(search)) {
          $(this).parents('li').hide();
        } else {
          $(this).parents('li').show();
        }
      })
    }           
    if ($('.search-box input').val() == '') {
      $('.search-box i').addClass('fa-search').removeClass('fa-arrow-left');
      $('.chats li').show();
    }
  });
}