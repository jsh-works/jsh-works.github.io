$(function(){
  // 기존 페이지 스크립트 (운영서버 불필요 스크립트)
  var contextPath = $('#contextPathHolder').attr('data-contextPath') ? $('#contextPathHolder').attr('data-contextPath') : '';
  var ebsDateFormat = "YY.MM.DD";
  var mediaPlayer = null;
  
  // 북스토리 공통상세 - 바텀 플로팅 스크립트
  $(".prod-purchase-footer").css({ bottom : '0px' });

  // 북스토리 공통상세 - 메뉴 클릭 스크립트
  $(".menu-nav ul li").on('click', function(){
    if($(this).data('layer') === "scribe") {
      $(".book-details.scribe").fadeIn().css({ display : 'flex'});
      $(".book-details.ebook").hide();
      $(".book-details.paper").hide();

    } else if($(this).data('layer') === "ebook") {
      $(".book-details.scribe").hide();
      $(".book-details.ebook").fadeIn().css({ display : 'flex'});
      $(".book-details.paper").hide();

    } else if($(this).data('layer') === "paper") {
      $(".book-details.scribe").hide();
      $(".book-details.ebook").hide();
      $(".book-details.paper").fadeIn().css({ display : 'flex'});
    }

    // 북스토리 공통상세 - 메뉴 변경 애니메이션 스크립트
    if($(".menu-nav ul li").hasClass('active')) {
      $(".menu-nav ul li").removeClass('active');
      $(this).addClass('active');
      $('.overlay').css({ left: $(this).prevAll().length * 142 + "px" });
    } else {
      $(".menu-nav ul li").removeClass('active');
    }
  });

  // 북스토리 공통상세 - 썸네일 호버 스크립트
  $(".thumb-img").hover(function(){
    $(".preview-ico").css({ display : 'flex' });
    $(".seeAll-ico").css({ display : 'flex' });
  }, function() {
    $(".preview-ico").css({ display : 'none' });
    $(".seeAll-ico").css({ display : 'none' });
  });

  $(".preview-ico").on('click', function(){
    alert("미리보기");
  });

  $(".seeAll-ico").on('click', function(){
    alert("전체 시리즈 보기");
  });

  // 북스토리 즐겨찾기 기능 스크립트
  $(".favorite-ico").on('click', function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  // 초중고교 eBook 추천 시리즈 페이지 메뉴 변경 스크립트
  $(".list-active dd").on('click', function(){
    const active = $(this).data('active');

    if($(".list-active dd").hasClass('active')) {
      $(".list-active dd").removeClass('active');
      $(this).addClass('active');
      
      switch (active) {
        case 1:
          $(".list-view.item1").addClass('show');
          $(".list-view.item2").removeClass('show');
          $(".list-view.item3").removeClass('show');
          $(".list-view.item4").removeClass('show');
          break;

        case 2:
          $(".list-view.item1").removeClass('show');
          $(".list-view.item2").addClass('show');
          $(".list-view.item3").removeClass('show');
          $(".list-view.item4").removeClass('show');
          break;

        case 3:
          $(".list-view.item1").removeClass('show');
          $(".list-view.item2").removeClass('show');
          $(".list-view.item3").addClass('show');
          $(".list-view.item4").removeClass('show');
          break;

        case 4:
          $(".list-view.item1").removeClass('show');
          $(".list-view.item2").removeClass('show');
          $(".list-view.item3").removeClass('show');
          $(".list-view.item4").addClass('show');
          break;
      
        default:
          break;
      }
    } else {
      $(".list-active dd").removeClass('active');
    }
  });

  // 초중고교 메인 슬라이드 배너
  var mainSildeBaner = new Swiper ('.slide-banner', {
		speed: 500,
		delay: 7000,
		loop: true,
		longSwipes: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false
		},
		effect: 'slide',
		slidesPerView: 1,
        pagination: {
					// el: '.swiper-pagination',
					// type: 'bullets',
			clickable: true,
		},
		navigation: {
            nextEl: '.slide-banner-btn-next',
            prevEl: '.slide-banner-btn-prev',
        },
  });

  // 구독메인 상단 슬라이드 스크립트
  var coverFlowSilder = new Swiper ('.coverflow-slide', {
		loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: -10,
      stretch: 0,
      depth: 350,
      modifier: 0.7,
      slideShadows: false,
    },
    navigation: {
      prevEl: '.coverflow-btn-prev',
      nextEl: '.coverflow-btn-next',
    },
  });

  // EBS eBook 체험하기 event
  var scrollEvent = () => {
    var $slider = $('.scroll-conts-box');
    $slider.find('.scroll-conts-slide').each(function (i) {
      $(this).siblings(".swiper-pagination").addClass("type" + i);
      $(this).siblings('ul').addClass("type" + i);
      var slider = new Swiper($(this), {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        speed: 300,
        pagination: {
            el: $slider.find('.swiper-pagination.type' + i),
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
              var idx = this.realIndex
              $slider.find('ul.type' + i + ' li').eq(idx).addClass('current').siblings('li').removeClass('current');
            }
        }
      });
    });
  }
  scrollEvent();

  // EBS eBook 체험하기 event
  $(document).on('click', '.scroll-conts-box ul li', function () {
    var idx = $(this).index();
    var $that = $(this).parents('.scroll-conts-box');
    $that.find('.swiper-pagination span').eq(idx).trigger('click');
  })
  
  // 구독메인 구독/결제 부분 스크립트
  $(".check-btn").on('click', function() {
    if(!$(this).hasClass('on')) {
      $(".check-btn").removeClass('on');
      $(this).addClass('on');
    }

    $(".floating").addClass('check');
    if($(".floating").hasClass('check')) {
      $(".change-box").show();
      $(".default-box").hide();
    } else {
      $(".change-box").hide();
      $(".default-box").show();
    }
   
  });

  // 구독메인 자주묻는질문 스크립트
  $(".faq-box ul li").on('click', function() {
    if(!$(this).hasClass('open')) {
      $(".faq-box ul li").removeClass('open');
      $(this).addClass('open');
    }
  });

  // 구독메인 스크롤 플로팅 표시
  $(window).scroll(function () {
    var winPosY = $(document).scrollTop();
    if(winPosY > 800) {
      $(".floating").css('display','block');
    } else {
      $(".floating").css('display','none');
    }
  });

  // 대상 교재 클릭 이벤트
  $(".quick-btn").on('click', function() {
    alert("대상 교재 URL");
  });
});