$(document).ready(function() {

  $('#tabPort').on('click', function() {
    $('.container').css('max-width', '750');
  });
  $('#tabLand').on('click', function() {
    $('.container').css('max-width', '1000');
  });
  $('#phone').on('click', function() {
    $('.container').css('max-width', '500');
  });
  $('#pc').on('click', function() {
    $('.container').css('max-width', '100%');
  });
});
