$(document).ready(function(){

    $('#page-title').hover(function(){
    console.log('hi there');
    $(this).toggleClass('animated pulse');

    var svgContainer = d3.select('#header-title').attr('position', 'absolute').append('svg').attr('width', 70).attr('height', 55);
    var circle = svgContainer
      .append('ellipse')
        .attr('cx', 30)
        .attr('cy', 30)
        .attr('rx', 30)
        .attr('ry', 20);
  })

  $('#page-title').mouseleave(function(){
    $('#header-title').children().remove();
  })

  $('.header-menu > li').hover(function(){
    $(this).find('ul').css('visibility', 'visible');
  });
  $('.header-menu > li').mouseleave(function(){
    $(this).find('ul').css('visibility', 'hidden');
  });


})


