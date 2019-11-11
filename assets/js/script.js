$(document).ready(function () {
  
  sendMessage();

});

// FUNCTIONS
function sendMessage() {
  $('#send-message').click(function() { 
    // recupero il messaggio scritto dall'utente
    var message = $('.type-message input').val();
    // inserisco il messaggio nella copia presa dal template
    var liMessage = $('#template .sent-message').clone();
    liMessage.find('span').text(message);
    // appendo dove mi serve
    $('.conversation ul').append(liMessage);
    // svuoto l'input
    $('.type-message input').val('');
  });
}