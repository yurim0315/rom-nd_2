$(function () {
    // fullpage
    var page = $('#fullpage').fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      controlArrows: false,
      navigation: true,
      navigationPosition: 'right',
      dragAndMove: true,
      scrollOverflow: true,
      normalScrollElements: '.con1',
    });

    // 
    $('.img3-2').hide();
    $('.section5').mouseover(function () {
      $('.img3-2').fadeIn(600);
    });

  // 
  $('#move_top').click(function(){
    location.href = 'main.html';
  });
  });