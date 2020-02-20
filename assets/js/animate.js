var row = $('.row').row(),
rowArr = row.split('');

$('.row').html('');

$.each(rowArr, function(i, v){
  if(v == ' '){$('.row').append('<span class="space"></span>');}
  $('.row').append('<span>'+v+'</span>');
})