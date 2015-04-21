$(document).ready(function(){

  var kittensHidden = true;
  $('#big-cat').click(function(){
    console.log('kitty clicked!')
    if (kittensHidden) {
      $('#first').animate({top: '-105px', left: '70px'}, 'slow');
      $('#second').animate({left: '235px'}, 'slow');
      $('#third').animate({top: '160px', left: '235px'}, 'slow');
      $('#fourth').animate({top: '333px', left: '70px'}, 'slow');
      $('#fifth').animate({top: '160px', left: '-105px'}, 'slow');
      $('#sixth').animate({left: '-105px'}, 'slow');
      kittensHidden = false;
    } else {
      $('#first').animate({top: '23px', left: '58px'}, 'slow');
      $('#second').animate({left: '63px'}, 'slow');
      $('#third').animate({top: '160px', left: '63px'}, 'slow');
      $('#fourth').animate({top: '173px', left: '70px'}, 'slow');
      $('#fifth').animate({top: '160px', left: '60px'}, 'slow');
      $('#sixth').animate({left: '60px'}, 'slow');
      kittensHidden = true;
    }
  });

  $('.kitty').hover(function(){
    $(this).css('border', '3px solid rgba(10, 178, 178, 1)');
  })

  $('.kitty').mouseleave(function(){
    $(this).css('border', '3px solid rgba(10, 178, 178, 0.2)');
  })

  $('.kitty').click(function(){
    var little = $(this).attr('src');
    $('#big-cat').attr('src', little);
  })


})

