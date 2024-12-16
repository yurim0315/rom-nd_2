$(function () {
    // fullpage
    var page = $('#fullpage').fullpage({
      menu: '.gnb',
      anchors: ['section1', 'section2', 'section3'],
      responsiveWidth: 431,
      responsiveHeight: 933,
      responsiveSlides: true,
      fitToSection: false, // 작은 화면에서 fitToSection 비활성화
      parallax: true // 작은 화면에서의 부드러운 스크롤링
    });


    // 메뉴
    $('.main_menu>li').mouseover(function () {
      $(this).find('.sub_menu').stop(500).slideDown(600);
    });
    $('.main_menu>li').mouseout(function () {
      $(this).find('.sub_menu').stop(500).slideUp(600);
    });

    // 슬라이드
    var swiper = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // 제품 탭메뉴
    $('.tab>li>a').click(function () {
      $(this).parent().addClass('active').siblings().removeClass('active')
      return false;
    })


    $('.left>ul>li:gt(0)').hide();
    setInterval(function () {
      $('.left>ul>li:first').fadeOut()
        .next('li').fadeIn()
        .end().appendTo('.left>ul')
    }, 3000)


    $('#new_t').mouseover(function () {
      $(this).attr('src', 'img/product/NEW_H.png')
    })
    $('#new_t').mouseout(function () {
      $(this).attr('src', 'img/product/NEW.png')
    })

    $('#best_t').mouseover(function () {
      $(this).attr('src', 'img/product/BEST_H.png')
    })
    $('#best_t').mouseout(function () {
      $(this).attr('src', 'img/product/BEST.png')
    })

    // 이미지 변경

    $('#new1').mouseover(function () {
      $(this).attr('src', 'img/product/new1_1.jpg')
    })
    $('#new1').mouseout(function () {
      $(this).attr('src', 'img/product/new1.jpg')
    })

    $('#new2').mouseover(function () {
      $(this).attr('src', 'img/product/new2_1.gif')
    })
    $('#new2').mouseout(function () {
      $(this).attr('src', 'img/product/new2.jpg')
    })


    $('#new3').mouseover(function () {
      $(this).attr('src', 'img/product/new3_1.gif')
    })
    $('#new3').mouseout(function () {
      $(this).attr('src', 'img/product/new3.jpg')
    })


    $('#new4').mouseover(function () {
      $(this).attr('src', 'img/product/new4_1.jpg')
    })
    $('#new4').mouseout(function () {
      $(this).attr('src', 'img/product/new4.jpg')
    })


    $('#best1').mouseover(function () {
      $(this).attr('src', 'img/product/best1_1.jpg')
    })
    $('#best1').mouseout(function () {
      $(this).attr('src', 'img/product/best1.jpg')
    })


    $('#best2').mouseover(function () {
      $(this).attr('src', 'img/product/best2_1.jpg')
    })
    $('#best2').mouseout(function () {
      $(this).attr('src', 'img/product/best2.jpg')
    })


    $('#best3').mouseover(function () {
      $(this).attr('src', 'img/product/best3_1.jpg')
    })
    $('#best3').mouseout(function () {
      $(this).attr('src', 'img/product/best3.jpg')
    })


    $('#best4').mouseover(function () {
      $(this).attr('src', 'img/product/best4_1.jpg')
    })
    $('#best4').mouseout(function () {
      $(this).attr('src', 'img/product/best4.jpg')
    })

    // 이벤트 페이지 호버
    $('.content3, .content4, .content5').mouseover(function () {
      $(this).find('h1').css('color', '#fdb6bc');
      $(this).find('a').css('color', '#fdb6bc').css('border-bottom-color', '#fdb6bc');
    });
    $('.content3, .content4, .content5').mouseout(function () {
      $(this).find('h1').css('color', '#333');
      $(this).find('a').css('color', '#333').css('border-bottom-color', '#333');
    });

    // 페이지 이동
    // product
    $('.main_menu>li:nth-child(1)').click(function () {
      location.href = 'product_base.html';
    });
    // openoffice
    $('.content3').click(function () {
      location.href = 'openoffice.html';
    });
    $('.content3_M').click(function () {
      location.href = 'openoffice.html';
    });

    // lookbook
    $('.content5').click(function () {
      location.href = 'lookbook.html';
    });
    $('.content5_M').click(function () {
      location.href = 'lookbook.html';
    });


    //반응형 new/best
    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
    });

    //반응형 오피스/케미/룩북
    $('.content3_M img:gt(0)').hide(); // Hide all images except the first one
    setInterval(function () {
      $('.content3_M img:first-child').fadeOut('slow').next("img").fadeIn('slow').end().appendTo(".content3_M");
    }, 3000);

    $('.content4_M img:gt(0)').hide(); // Hide all images except the first one
    setInterval(function () {
      $('.content4_M img:first-child').fadeOut('slow').next("img").fadeIn('slow').end().appendTo(".content4_M");
    }, 3000);

    $('.content5_M img:gt(0)').hide(); // Hide all images except the first one
    setInterval(function () {
      $('.content5_M img:first-child').fadeOut('slow').next("img").fadeIn('slow').end().appendTo(".content5_M");
    }, 3000);

    // 반응형 햄버거 메뉴
    // 햄버거 메뉴 클릭 이벤트
    $('.hamburger-menu').click(function () {
      $('.main_menu').toggleClass('active');
      $(this).toggleClass('open');
    });

  });
