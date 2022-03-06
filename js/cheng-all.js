$(document).ready(function () {
    //go top
    $('.goTop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    //下拉式選單
    $('.menu > li > a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();        
    });
    $('.menu > li').mouseleave(function () {
        $('.menu ul').slideUp();         
    });

    //swiper banner 輪播
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',  
        speed:1000,  
        loop: true,
        autoplay:{
            delay:1500,  
        },        
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //Lightbox 燈箱效果
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

    //左側選單
    $('.leftMenu').click(function (e) { 
        e.preventDefault();
        $('.aside').toggleClass('open');
    });
    $('.aside > ul > li > a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    });

    //加入購物車
    $('.addCart').click(function (e) { 
        e.preventDefault();
        alert('已將課程加入購物車囉～');
        $(this).parent().toggleClass('open');
        $(this).toggle();
        $(this).parent().find('.removeCart').toggleClass('show');
    });
    $('.removeCart').click(function (e) { 
        e.preventDefault();
        alert('已將課程從購物車移除囉～')
        $(this).parent().toggleClass('open');
        $(this).toggleClass('show');
        $(this).parent().find('.addCart').toggle();
    });

    //fontAwesome
    $(".contact a[href*='mailto']").addClass('fas fa-envelope');
    $(".contact a[href*='tel']").addClass('fas fa-phone');

    //關閉cookies
    $('.closeCookies').click(function (e) { 
        e.preventDefault();
        $('.cookies').fadeOut();
    });


});