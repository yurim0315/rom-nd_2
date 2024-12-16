$(function(){
    // ================탭메뉴=========================
    $('.tab>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    })
    // 베스트 클릭. left상자 이미지 바뀜
    $('.tab>li>.best_button').click(function(){
         $('.left_box>img').attr('src',"./img/베스트/큰이미지.jpg")
    })
    $('.tab>li>.new_button').click(function(){
         $('.left_box>img').fadeIn().attr('src',"./img/신상품/빅이미지.jpg")
     })
    
    // 신상품 이미지 호버
    $('.new>ul>li:nth-child(1)').mouseover(function(){
        $('.new>ul>li:nth-child(1)>img').attr('src','./img/신상품/쥬시 래스팅 틴트.gif');
    }).mouseout(function(){
        $('.new>ul>li:nth-child(1)>img').attr('src',"./img/신상품/더 쥬시 래스팅틴트.jpg");
    })
    $('.new>ul>li:nth-child(2)').mouseover(function(){
        $('.new>ul>li:nth-child(2)>img').attr('src','./img/신상품/슬라이드 인 싱글-크롭.gif');
    }).mouseout(function(){
        $('.new>ul>li:nth-child(2)>img').attr('src','./img/신상품/슬라이드 인 싱글.jpg');
    })

    $('.new>ul>li:nth-child(3)').mouseover(function(){
        $('.new>ul>li:nth-child(3)>img').attr('src','./img/신상품/싱글케이스-크롭.gif');
    }).mouseout(function(){
        $('.new>ul>li:nth-child(3)>img').attr('src','./img/신상품/슬라이드인싱글케이스.png');
    })

    // 베스트 이미지 호버
    $('.best>ul>li:nth-child(1)').mouseover(function(){
        $('.best>ul>li:nth-child(1)>img').attr('src',"./img/베스트/쉬어.gif");
    }).mouseout(function(){
        $('.best>ul>li:nth-child(1)>img').attr('src',"./img/베스트/쉬어 구슬 파우더.jpg");
    })
    $('.best>ul>li:nth-child(3)').mouseover(function(){
        $('.best>ul>li:nth-child(3)>img').attr('src',"./img/베스트/멜팅밤.gif");
    }).mouseout(function(){
        $('.best>ul>li:nth-child(3)>img').attr('src',"./img/베스트/글래스팅 멜팅 밤.jpg");
    })
    $('.best>ul>li:nth-child(4)').mouseover(function(){
        $('.best>ul>li:nth-child(4)>img').attr('src',"./img/베스트/쥬시래스팅.gif");
    }).mouseout(function(){
        $('.best>ul>li:nth-child(4)>img').attr('src',"./img/베스트/쥬시 래스팅 틴트.jpg");
    })
})