$(function () {
    // 메뉴
    $('.main_menu>li').mouseover(function () {
      $(this).find('.sub_menu').stop(500).slideDown(600);
    });
    $('.main_menu>li').mouseout(function () {
      $(this).find('.sub_menu').stop(500).slideUp(600);
    });

    // 이미지 움직이는거
    $('.product>div').mouseover(function () {
      $(this).find('.mImg_hide').css('margin-left', '-160px');
    });
    $('.product>div').mouseout(function () {
      $(this).find('.mImg_hide').css('margin-left', '20px');
    });

    //반응형 제품 슬라이드
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
    });

    // 반응형 햄버거 메뉴
    // 햄버거 메뉴 클릭 이벤트
    $('.hamburger-menu').click(function () {
      $('.main_menu').toggleClass('active');
      $(this).toggleClass('open');
    });
  });