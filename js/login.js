$(function () {
    // ========메뉴=======
    $('.main_menu>li').mouseover(function () {
      $(this).find('.sub_menu').stop(500).slideDown(600);
    });
    $('.main_menu>li').mouseout(function () {
      $(this).find('.sub_menu').stop(500).slideUp(600);
    });

    $('.activeBox').hide();
    $('.con3_textbox>a').click(function () {
      // Check if the box is currently hidden or visible
      if ($('.activeBox').is(':visible')) {
        // If visible, slide up and change the image to '더하기.png'
        $('.activeBox').slideUp(500);
        $(this).children().attr('src', './img/icon/Add.png');
      } else {
        // If hidden, slide down and change the image to '빼기.png'
        $('.activeBox').slideDown(500);
        $(this).children().attr('src', './img/icon/Subtract.png');
      }
      return false; // Prevent default behavior
    });


    // =========스와이퍼==========
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        350: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
    });


    // 내 정보
    $('.button').click(function () {
      $(this).toggleClass('rotate').css('transition', 'all 1s');
      $('.con0_iconbox').toggleClass('active').css('transition', 'all 1s');
    });

    // 반응형 햄버거 메뉴
    // 햄버거 메뉴 클릭 이벤트
    $('.hamburger-menu').click(function () {
      $('.main_menu').toggleClass('active');
      $(this).toggleClass('open');
    });

    

  });