$(function(){
  
console.log(`
%c  ########   #######   #######  ##    ##     ######  ########  #######  ########  ##    ## 
%c  ##     ## ##     ## ##     ## ##   ##     ##    ##    ##    ##     ## ##     ##  ##  ##  
%c  ##     ## ##     ## ##     ## ##  ##      ##          ##    ##     ## ##     ##   ####   
%c  ########  ##     ## ##     ## #####        ######     ##    ##     ## ########     ##    
%c  ##     ## ##     ## ##     ## ##  ##            ##    ##    ##     ## ##   ##      ##    
%c  ##     ## ##     ## ##     ## ##   ##     ##    ##    ##    ##     ## ##    ##     ##    
%c  ########   #######   #######  ##    ##     ######     ##     #######  ##     ##    ##
`, "color:#22577A", "color:#38A3A5", "color:#57CC99", "color:#80ED99", "color:#99FFED", "color:#99FFED", "color:#FFFFFF")


  // 기존 페이지 스크립트
  var contextPath = $('#contextPathHolder').attr('data-contextPath') ? $('#contextPathHolder').attr('data-contextPath') : '';
  var ebsDateFormat = "YY.MM.DD";
  var mediaPlayer = null;
  
  // 나의 교재방 목록 뿌려주기 PC, Mobile 분기처리  
  var windowWidth = $(window).width();
  var album ="";
  var tbAlbum ="";
  var list ="";

  // 이용안내 tab 스크립트
  var $tabs = $(".use .tab-menu ul li");
  $tabs.on('click', function() {
    if($tabs.hasClass('active')) {
      $tabs.removeClass('active');
      $(this).addClass('active');

      if($(this).hasClass('tab1')) {
        $(".tab-con1").show();
        $(".tab-con2").hide();
        $(".tab-con3").hide();
        $(".tab-con4").hide();

      } else if($(this).hasClass('tab2')) {
        $(".tab-con1").hide();
        $(".tab-con2").show();
        $(".tab-con3").hide();
        $(".tab-con4").hide();

      } else if($(this).hasClass('tab3')) {
        $(".tab-con1").hide();
        $(".tab-con2").hide();
        $(".tab-con3").show();
        $(".tab-con4").hide();

      } else if($(this).hasClass('tab4')) {
        $(".tab-con1").hide();
        $(".tab-con2").hide();
        $(".tab-con3").hide();
        $(".tab-con4").show();
      }
    } else {
      $(this).addClass('active');
      $(".use .tab-menu ul li").removeClass('active');
    }
  });
  


  // 북스토리 공통상세 - 바텀 플로팅 스크립트
  $(".prod-purchase-footer").css({ bottom : '0px' });
    
  // 북스토리 PC 공통상세 - 메뉴 클릭 스크립트
  $(".menu-nav ul li").on('click', function(){
    if($(this).data('layer') == "scribe") {
      $(".book-details.scribe").fadeIn().css({ display : 'flex'});
      $(".book-details.ebook").hide();
      $(".book-details.paper").hide();
      $(".prod-purchase-footer .prod-inner .scribe-type").fadeIn().css({ display : 'flex'});
      $(".prod-purchase-footer .prod-inner .ebook-type").hide();
      $(".prod-purchase-footer .prod-inner .paper-type").hide();

    } else if($(this).data('layer') == "ebook") {
      $(".book-details.scribe").hide();
      $(".book-details.ebook").fadeIn().css({ display : 'flex'});
      $(".book-details.paper").hide();
      $(".prod-purchase-footer .prod-inner .scribe-type").hide();
      $(".prod-purchase-footer .prod-inner .ebook-type").fadeIn().css({ display : 'flex'});
      $(".prod-purchase-footer .prod-inner .paper-type").hide();

    } else if($(this).data('layer') == "paper") {
      $(".book-details.scribe").hide();
      $(".book-details.ebook").hide();
      $(".book-details.paper").fadeIn().css({ display : 'flex'});
      $(".prod-purchase-footer .prod-inner .scribe-type").hide();
      $(".prod-purchase-footer .prod-inner .ebook-type").hide();
      $(".prod-purchase-footer .prod-inner .paper-type").fadeIn().css({ display : 'flex'});
    }

    // 북스토리 PC 공통상세 - 메뉴 변경 애니메이션 스크립트
    if($(".menu-nav ul li").hasClass('active')) {
      $(".menu-nav ul li").removeClass('active');
      $(this).addClass('active');
      
      if( $(this).prevAll().length == 0 ) {
        $('.overlay').css('left','4px'); 
      } else {
        $('.overlay').css({ left: $(this).prevAll().length * 142 + "px" });
      }
    } else {
      $(".menu-nav ul li").removeClass('active');
    }
  });

  // 북스토리 모바일 공통상세 - 메뉴 클릭 스크립트
  $(".thumb-btn-box li").on('click', function(){
    if($(this).data('layer') == "scribe") {
      $(".mob-cnt-book-infos.scribe").fadeIn().css({ display : 'block'});
      $(".mob-cnt-book-infos.ebook").hide();
      $(".mob-cnt-book-infos.paper").hide();
      $(".prod-purchase-footer .prod-inner .scribe-type").fadeIn().css({ display : 'flex'});
      $(".prod-purchase-footer .prod-inner .ebook-type").hide();
      $(".prod-purchase-footer .prod-inner .paper-type").hide();

    } else if($(this).data('layer') == "ebook") {
      $(".mob-cnt-book-infos.scribe").hide();
      $(".mob-cnt-book-infos.ebook").fadeIn().css({ display : 'block'});
      $(".mob-cnt-book-infos.paper").hide();
      $(".prod-purchase-footer .prod-inner .scribe-type").hide();
      $(".prod-purchase-footer .prod-inner .ebook-type").fadeIn().css({ display : 'flex'});
      $(".prod-purchase-footer .prod-inner .paper-type").hide();

    } else if($(this).data('layer') == "paper") {
      $(".mob-cnt-book-infos.scribe").hide();
      $(".mob-cnt-book-infos.ebook").hide();
      $(".mob-cnt-book-infos.paper").fadeIn().css({ display : 'block'});
      $(".prod-purchase-footer .prod-inner .scribe-type").hide();
      $(".prod-purchase-footer .prod-inner .ebook-type").hide();
      $(".prod-purchase-footer .prod-inner .paper-type").fadeIn().css({ display : 'flex'});
    }

    // 북스토리 공통상세 - 메뉴 변경 애니메이션 스크립트
    if($(".thumb-btn-box li").hasClass('active')) {
      $(".thumb-btn-box li").removeClass('active');
      $(this).addClass('active');
    } else {
      $(".thumb-btn-box li").removeClass('active');
    }
  });

  // 북스토리 모바일 공통상세 - 버그수정
  $(window).resize(function() {
    var ww = $(window).width();
    if(ww > 1024) {
      $(".mob-cnt-book-infos.scribe").hide();
      $(".mob-cnt-book-infos.ebook").hide();
      $(".mob-cnt-book-infos.paper").hide();
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

  new Swiper ('.slide-banner', {
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
			clickable: true,
		},
		navigation: {
        nextEl: '.slide-banner-btn-next',
        prevEl: '.slide-banner-btn-prev',
    },
  });
  
  // 초중고교 EBS Picks 목록 뿌려주기 스크립트 PC
  $(".list-active dd").on('click', function(){
    const active = $(this).data('active');

    if($(".list-active dd").hasClass('active')) {
      $(".list-active dd").removeClass('active');
      $(this).addClass('active');
      
      switch (active) {
        case 1:
          $(".list-slider.item1").addClass('show');
          $(".list-slider.item2").removeClass('show');
          $(".list-slider.item3").removeClass('show');
          $(".list-slider.item4").removeClass('show');
          break;

        case 2:
          $(".list-slider.item1").removeClass('show');
          $(".list-slider.item2").addClass('show');
          $(".list-slider.item3").removeClass('show');
          $(".list-slider.item4").removeClass('show');
          break;

        case 3:
          $(".list-slider.item1").removeClass('show');
          $(".list-slider.item2").removeClass('show');
          $(".list-slider.item3").addClass('show');
          $(".list-slider.item4").removeClass('show');
          break;

        case 4:
          $(".list-slider.item1").removeClass('show');
          $(".list-slider.item2").removeClass('show');
          $(".list-slider.item3").removeClass('show');
          $(".list-slider.item4").addClass('show');
          break;
      
        default:
          break;
      }
    } else {
      $(".list-active dd").removeClass('active');
    }
  });


  // 초중고교 EBS Picks 목록 뿌려주기 스크립트 Mobile
  $("#selectGroup").on('change', function() {
    const select = $("#selectGroup option:selected").val();

    if(select == 1) {
      $(".list-slider.item1").addClass('show');
      $(".list-slider.item2").removeClass('show');
      $(".list-slider.item3").removeClass('show');
      $(".list-slider.item4").removeClass('show');

    } else if(select == 2) {
      $(".list-slider.item1").removeClass('show');
      $(".list-slider.item2").addClass('show');
      $(".list-slider.item3").removeClass('show');
      $(".list-slider.item4").removeClass('show');

    } else if(select == 2) {
      $(".list-slider.item1").removeClass('show');
      $(".list-slider.item2").removeClass('show');
      $(".list-slider.item3").addClass('show');
      $(".list-slider.item4").removeClass('show');

    } else if(select == 3) {
      $(".list-slider.item1").removeClass('show');
      $(".list-slider.item2").removeClass('show');
      $(".list-slider.item3").addClass('show');
      $(".list-slider.item4").removeClass('show');
    } else {
      $(".list-slider.item1").removeClass('show');
      $(".list-slider.item2").removeClass('show');
      $(".list-slider.item3").removeClass('show');
      $(".list-slider.item4").addClass('show');
    }
  });


  // 초중고교 메인 슬라이드 배너
  new Swiper ('.slide-banner', {
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
			clickable: true,
		},
		navigation: {
      nextEl: '.slide-banner-btn-next',
      prevEl: '.slide-banner-btn-prev',
    },
  });
  
  // 초중고교 이벤트 슬라이드 배너 
  var eventSlideCount = $('.event-slide-banner .swiper-slide').length;
  new Swiper ('.event-slide-banner', {
		speed: 500,
		delay: 7000,
    loop: eventSlideCount > 1, 
    allowTouchMove: eventSlideCount > 1, 
    longSwipes: true,
    autoplay: eventSlideCount > 1 ? { 
      delay: 7000,
      disableOnInteraction: false
    } : false,
		effect: 'slide',
		slidesPerView: 1,
    navigation: {
        nextEl: '.evt-slide-btn-next',
        prevEl: '.evt-slide-btn-prev',
    },
  });
  if(eventSlideCount <= 1) { 
    $('.evt-slide-btn-next, .evt-slide-btn-prev').hide();
  }

  
  // 초중고교 EBS Picks 슬라이드
  var listSlider = new Swiper ('.list-slider', { // mobile 
    initialSlide: 0,
		slidesPerView:5,
    spaceBetween: 12,
    observer: true,
    observeParents: true,
    loop: false,
    grabCursor: true,
    allowTouchMove: false,
    autoplay:false,
    breakpoints: {
      550: {
          initialSlide: 0,
          slidesPerView: 2.8,
          spaceBetweenSlides: 12,
          allowTouchMove: true,
          grabCursor: true,
      },
      768: {
          initialSlide: 0,
          slidesPerView: 3.8,
          allowTouchMove: true,
          grabCursor: true,
      }
    },
  });

  // 초중고교 EBS Picks 슬라이드 반응형 초기화
  $(window).on('resize', function () {
    if (listSlider) {
      setTimeout(function () {
        $('.list-slider .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
      }, 100);
    }
  });

  // 구독메인 상단 슬라이드 스크립트
  new Swiper ('.coverflow-slide', { // mobile
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 15,
    coverflowEffect: {
      rotate: -10,
      stretch: 0,
      depth: 300,
      modifier: 0.6,
      slideShadows: false,
    },
    breakpoints: { // pc
      500: {
        coverflowEffect: {
          rotate: -10,
        },
      },
    },
    navigation: {
      prevEl: '.coverflow-btn-prev',
      nextEl: '.coverflow-btn-next',
    },
  });

  // 초/중/고교 이번주, 이 책! 드래그 이벤트
  let isDragging = false;
  let startX;
  let scrollLeft;

  $(".flex-items").mousedown(function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
    $(this).css('cursor', 'grabbing');

  });

  $(".flex-items").mouseleave(function(e) {
    e.preventDefault();
    isDragging = false;
    $(this).css('cursor', 'grab');
  });

  $(".flex-items").mouseup(function(e) {
    e.preventDefault();
    isDragging = false;
    $(this).css('cursor', 'grab');
  });

  $(".flex-items").mousemove(function(e) {
    if(!isDragging) return;
    e.preventDefault();
    const x = e.pageX - $(this).offset().left;
    const walk = (x - startX) * 1.5; // 조절 가능한 스크롤 속도
    $(this).scrollLeft(scrollLeft - walk);
  });


  // 초중고교 인기시리즈 슬라이드 제작
  $(window).resize(function() { // 실시간 브라우저 체크 (반응형 대응)
    $(".popular-box ul").scroll(function() {
      let scrollLeft = $(this).scrollLeft();
      let elemWidth = $(this).width();
      let scrollWidth = this.scrollWidth;

      if (scrollLeft + elemWidth + 40 >= scrollWidth) { // 스크롤 끝점 도달
        $(".pop-next-btn").hide();
        $(".pop-prev-btn").show();
      } else if (scrollLeft == 0) { // 스크롤 처음으로 도달
        $(".pop-prev-btn").hide();
        $(".pop-next-btn").show();
      }
    });
  });

  let tableWidth = $(".popular-box > ul > li").width(); // 한 테이블의 넓이
  $(".pop-next-btn").on('click', function() {
    var targetPosition = $(".popular-box ul").scrollLeft() + tableWidth;
    $(".popular-box ul").animate({scrollLeft: targetPosition}, 500);
  });


  $(".pop-prev-btn").on('click', function() {
    var targetPosition = $(".popular-box ul").scrollLeft() - tableWidth;
    $(".popular-box ul").animate({scrollLeft: targetPosition}, 500);
  });
  

  // EBS eBook 체험하기 pc event 
  function initScrollEventSwiper(type) {
    var $slider = $('.scroll-conts-box.' + type);
    $slider.find('.scroll-conts-slide').each(function (i) {
      $(this).siblings('.swiper-pagination').addClass(type);
      $(this).siblings('ul').addClass(type);
      new Swiper($(this), {
        direction: "vertical",
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: true,
        speed: 300,
        pagination: {
          el: $slider.find('.swiper-pagination.' + type),
          clickable: true,
        },
        on: {
          slideChangeTransitionStart: function () {
            var idx = this.realIndex;
            $slider.find('ul.' + type + ' li').eq(idx).addClass('current').siblings('li').removeClass('current');
          }
        },
        observer: true, // DOM 변화 감지
        observeParents: true, // DOM 변화 감지
      });
    });

    $(document).on('click', '.scroll-conts-box.' + type + ' ul li', function () {
      var idx = $(this).index();
      var $that = $(this).closest('.scroll-conts-box.' + type);
      $that.find('.swiper-pagination span').eq(idx).trigger('click');
    });
  }

  initScrollEventSwiper('type00'); 
  initScrollEventSwiper('type01'); 
  initScrollEventSwiper('type02');
  initScrollEventSwiper('type03');
  initScrollEventSwiper('type04');


  // EBS eBook 체험하기 mobile event
  new Swiper( '.fade-conts-box', {
    effect : 'fade',
    loop: true,
    speed: 500,
    delay: 7000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation : {
      nextEl : '.fade-btn-next',
      prevEl : '.fade-btn-prev',
    },
    observer: true, // DOM 변화 감지
    observeParents: true, // DOM 변화 감지
  });

  new Swiper( '.fade-conts-box.type01', {
    effect : 'fade',
    loop: true,
    speed: 500,
    delay: 7000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation : {
      nextEl : '.fade-btn-next',
      prevEl : '.fade-btn-prev',
    },
    observer: true, // DOM 변화 감지
    observeParents: true, // DOM 변화 감지
  });
  new Swiper( '.fade-conts-box.type02', {
    effect : 'fade',
    loop: true,
    speed: 500,
    delay: 7000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation : {
      nextEl : '.fade-btn-next',
      prevEl : '.fade-btn-prev',
    },
    observer: true, // DOM 변화 감지
    observeParents: true, // DOM 변화 감지
  });
  new Swiper( '.fade-conts-box.type03', {
    effect : 'fade',
    loop: true,
    speed: 500,
    delay: 7000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation : {
      nextEl : '.fade-btn-next',
      prevEl : '.fade-btn-prev',
    },
    observer: true, // DOM 변화 감지
    observeParents: true, // DOM 변화 감지
  });
  new Swiper( '.fade-conts-box.type04', {
    effect : 'fade',
    loop: true,
    speed: 500,
    delay: 7000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation : {
      nextEl : '.fade-btn-next',
      prevEl : '.fade-btn-prev',
    },
    observer: true, // DOM 변화 감지
    observeParents: true, // DOM 변화 감지
  });
  
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
      $(this).addClass('open');
    } else {
      $(this).removeClass('open');
    }
  });

  // 구독메인 스크롤 플로팅 표시
  if($('#contentsWrap').hasClass('subscribe')) {
    $(window).scroll(function () {
      var winPosY = $(document).scrollTop();
      var offset = $(".btn-items ul").offset();
      var top = offset.top;
      // console.log(winPosY, top);

      if(winPosY > top) {
        $(".floating").css('display','block');
      } else {
        $(".floating").css('display','none');
      }
    });
  }

  // 구독메인 - top-banner 스크립트 추가
  $(".top-banner").on('click', function() {
      
  });
  
  // 구독메인 - 구독 시작하기 버튼 스크립트
  $(".top-banner, .start-btn").on('click', function() {
    var target = $(".sec3").offset();
    $('html, body').animate({ scrollTop:target.top },500);
  });

  // 구독 메인 - 결제 이전 유의사항 팝업 열기
  $(".payment-btn").on('click', function() {
    $(".payment-before-popup").fadeIn().css({ display : 'flex' });
    $('body').css({ overflow : 'hidden' });
  });

  // 구독 메인 - 결제 이전 유의사항, 결제 버튼 클릭
  $(".pay-after-btn button").on('click', function() {
    if($(".info-check input").prop('checked')) {
      $(".payment-before-popup").fadeOut();
      $(".payment-popup").fadeIn().css({ display : 'flex' });
      $('body').css({ overflow : 'hidden' });
    } else {
      alert("유의 사항 확인 후 구매 가능합니다.");
    }
  });

   // 구독 메인 - 결제 이전 유의사항 팝업 닫기
  $(".payment-before-popup .close").on('click', function() {
    $(".payment-before-popup").fadeOut();
    $('body').css({ overflow : 'auto' });
  });

  // 구독 메인 - 결제 팝업 닫기
  $(".payment-popup .close").on('click', function() {
    $(".payment-popup").fadeOut();
    $('body').css({ overflow : 'auto' });
  });
  
  // 이용 가능 교재 - 팝업 열기
  $(".quick-btn").on('click', function() {
    $(".target-popup").fadeIn().css({ display : 'flex' });
    $('body').css({ overflow : 'hidden' });
  });

  // 이용 가능 교재 모바일 - 팝업 열기
  $(".mo-quick-btn").on('click', function() {
    $(".target-popup").fadeIn().css({ display : 'flex' });
    $('body').css({ overflow : 'hidden' });
  });

  // 대상 교재 팝업 닫기
  $(".target-popup .close").on('click', function() {
    $(".target-popup").fadeOut();
    $('body').css({ overflow : 'auto' });
  });

  // 나의 교재방 전체/구독/단건구매 타입별로 보기 스크립트
  $(".viewer-btns ul li").on('click', function() {
    if(!$(this).hasClass('active')) {
      $(".viewer-btns ul li").removeClass('active');
      $(this).addClass('active');
    }
  });

  // 나의 교재방 앨범/목록 형 타입 선택 스크립트
  $(".types button").on('click', function() {
    if($(this).hasClass('album-type')) { // 앨범 형태
      $('.album-type').addClass('on');
      $('.list-type').removeClass('on');
      $(".mybook-list-box.albumType").show();
      $(".mybook-list-box.listType").hide();

      $(".textbook-list-box.albumType").show();
      $(".textbook-list-box.listType").hide();

    } else if($(this).hasClass('list-type')) { // 목록 형태
      $('.album-type').removeClass('on');
      $('.list-type').addClass('on');
      $(".mybook-list-box.albumType").hide();
      $(".mybook-list-box.listType").show();

      $(".textbook-list-box.listType").show();
      $(".textbook-list-box.albumType").hide();
    } else {
      return false;
    }
  });

  $(".sub-sort .buy-sub-list li").on('click', function() {
    if($(!$(this).hasClass('active'))) {
      $(".sub-sort .buy-sub-list li").removeClass('active');
      $(this).addClass('active');
    }
  });
  
  $(".sub-sort .scr-sub-list li").on('click', function() {
    if($(!$(this).hasClass('active'))) {
      $(".sub-sort .scr-sub-list li").removeClass('active');
      $(this).addClass('active');
    }
  });

  // 나의 교재방 모바일 좌측 필터버튼 선택 스크립트
  $(".filter-type").on('click', function() {
    if($(this).hasClass('on')) {
      $(this).removeClass('on');
      $(".mob-sort-popup").hide();
    } else {
      $(this).addClass('on');
      $(".mob-sort-popup").show();
    }
  });
  
  $(".mob-sort-popup .close-ico").on('click', function() {
    $(".mob-sort-popup").hide();
  });

  // 나의 교재방 모바일 좌측 필터버튼 정렬순서 선택 스크립트
  $(".mob-sort-popup dl.sort-state dd").on('click', function(){
    if(!$(this).hasClass('active')) {
      $(".mob-sort-popup dl.sort-state dd").removeClass('active');
      $(this).addClass('active');
    }
  });

  // 나의 교재방 모바일 좌측 필터버튼 필터순서 선택 스크립트
  $(".mob-sort-popup dl.filter-state dd").on('click', function(){
    if(!$(this).hasClass('active')) {
      $(".mob-sort-popup dl.filter-state dd").removeClass('active');
      $(this).addClass('active');
    }
  });

  $(".clear").on('click', function() {
    $(".mob-sort-popup").hide();
    $(".filter-type").removeClass('on');
  });


  // function albumTypeFnc() {
  //   if(windowWidth > 1024) { // PC
  //     for(var i = 1; i < 3; i++) {
  //       album+=`<ul><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="expire">만료: 2025-06-24</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button></div><span class="buy">구매</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button></div><span class="buy">구매</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="buy">구매</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="expire">만료: 2025-06-24</span></div></li></ul>`;

  //       tbAlbum+=`<ul><li><div class='book-item'><div class='flag-box'><span class='flag-pass'>수능패스</span><span class='flag-element'>초·중 구독</span><span class='flag-high'>중·고 구독</span></div><div class='thumb-box ebook corct'><i class='cart-ico'></i> <i class='favorite-ico'></i> <a href='./bookStoryView.html'><img src='./imgs/textbook-list-img.png' alt='교재 이미지'></a></div><dl class='textbook-info'><dt><a href='./bookStoryView.html'>EBS 2026학년도 수능 기출의 미래 수학</a></dt><dd>종이책 판매가 : <em>10,800</em>원</dd><dd>eBook 판매가 : <em>9,60</em>0원</dd></dl></div></li><li><div class='book-item'><div class='flag-box'><span class='flag-pass'>수능패스</span><span class='flag-element'>초·중 구독</span><span class='flag-high'>중·고 구독</span></div><div class='thumb-box ebook corct'><i class='cart-ico active'></i> <i class='favorite-ico'></i> <i class='subscribe-ico'></i> <a href='./bookStoryView.html'><img src='./imgs/textbook-list-img.png' alt='교재 이미지'></a></div><dl class='textbook-info'><dt><a href='./bookStoryView.html'>EBS 2026학년도 수능 기출의 미래 수학</a></dt><dd>종이책 판매가 : <em>10,800</em>원</dd><dd>eBook 판매가 : <em>9,60</em>0원</dd></dl></div></li><li><div class='book-item'><div class='flag-box'><span class='flag-pass'>수능패스</span><span class='flag-element'>초·중 구독</span><span class='flag-high'>중·고 구독</span></div><div class='thumb-box ebook corct'><i class='cart-ico'></i> <i class='favorite-ico'></i> <a href='./bookStoryView.html'><img src='./imgs/textbook-list-img.png' alt='교재 이미지'></a></div><dl class='textbook-info'><dt><a href='./bookStoryView.html'>EBS 2026학년도 수능 기출의 미래 수학</a></dt><dd>종이책 판매가 : <em>10,800</em>원</dd><dd>eBook 판매가 : <em>9,60</em>0원</dd></dl></div></li><li><div class='book-item'><div class='flag-box'><span class='flag-pass'>수능패스</span><span class='flag-element'>초·중 구독</span><span class='flag-high'>중·고 구독</span></div><div class='thumb-box ebook corct'><i class='cart-ico'></i> <i class='favorite-ico'></i> <a href='./bookStoryView.html'><img src='./imgs/textbook-list-img.png' alt='교재 이미지'></a></div><dl class='textbook-info'><dt><a href='./bookStoryView.html'>EBS 2026학년도 수능 기출의 미래 수학</a></dt><dd>종이책 판매가 : <em>10,800</em>원</dd><dd>eBook 판매가 : <em>9,60</em>0원</dd></dl></div></li></ul>`;
  //     }

  //     $(".mybook-list-box.albumType").html(album);
  //     $(".textbook-list-box.albumType").html(tbAlbum);

  //   } else {
  //     for(var i = 1; i < 3; i++) { // Mobile
  //       album+=`<ul><li><div class="textbook-box"><img src="./imgs/books_example.png" class="mob-thumb" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="expire">만료: 2025-06-24</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" class="mob-thumb" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="buy">구매</span></div></li></ul>`;

  //       tbAlbum+=`<ul><li><div class='book-item'><div class='flag-box'><span class='flag-pass'>수능패스</span><span class='flag-element'>초·중 구독</span><span class='flag-high'>중·고 구독</span></div><div class='thumb-box ebook corct'><i class='cart-ico'></i> <i class='favorite-ico'></i> <a href='./bookStoryView.html'><img src='./imgs/textbook-list-img.png' alt='교재 이미지'></a></div><dl class='textbook-info'><dt><a href='./bookStoryView.html'>EBS 2026학년도 수능 기출의 미래 수학</a></dt><dd>종이책 판매가 : <em>10,800</em>원</dd><dd>eBook 판매가 : <em>9,60</em>0원</dd></dl></div></li><li><div class='book-item'><div class='flag-box'><span class='flag-pass'>수능패스</span><span class='flag-element'>초·중 구독</span><span class='flag-high'>중·고 구독</span></div><div class='thumb-box ebook corct'><i class='cart-ico active'></i> <i class='favorite-ico'></i> <i class='subscribe-ico'></i> <a href='./bookStoryView.html'><img src='./imgs/textbook-list-img.png' alt='교재 이미지'></a></div><dl class='textbook-info'><dt><a href='./bookStoryView.html'>EBS 2026학년도 수능 기출의 미래 수학</a></dt><dd>종이책 판매가 : <em>10,800</em>원</dd><dd>eBook 판매가 : <em>9,60</em>0원</dd></dl></div></li></ul>`;
  //     }

  //     $(".mybook-list-box.albumType").html(album);
  //     $(".textbook-list-box.albumType").html(tbAlbum);
  //   }
  // }

  // function listTypeFnc() {
  //   // PC, Mobile 동일
  //   for(var i = 1; i < 2; i++) {
  //     list+=`<li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li>`;
  //   }
  //   $(".mybook-list-box.listType").html('<ul>'+ list +'</ul>');
  // }

  // albumTypeFnc();
  // listTypeFnc();

  // $(".more-btn").on('click', function() {
  //   albumTypeFnc();
  //   listTypeFnc();
  // });

  // 나의 교재방 모바일 바텀배너 스크립트
  $(".bootm-banner ul li").hover(function(){
    $(this).addClass('on');
  }, function() {
    $(this).removeClass('on');
  });


  // 나의 교재방 모바일 리스트형 보기 스크립트 (바텀시트)
  if(windowWidth < 1024) {
    $(".mob-thumb").on('click', function(e) {
      e.preventDefault();
      $(".bottomSheet").fadeIn();
      $(".bottomSheet .popup").animate({bottom : 0}, 315);
    });
  }
  
  // 나의 교재방 모바일 바텀시트 스크립트
  $(".bottomSheet .close, .bottomSheet .cancel").on('click', function() {
    $(".bottomSheet").fadeOut();
    $(".bottomSheet .popup").animate({bottom : -315}, 315);
  });
  
  $(".bottomSheet .clear").on('click', function() {
    $(".bottomSheet").fadeOut();
    $(".bottomSheet .popup").animate({bottom : -315}, 315);
  });
  
  $(".bottomSheet ul li").on('click', function() {
    if(!$(this).hasClass('active')) {
      $(".bottomSheet ul li").removeClass('active');
      $(this).addClass('active');
    }
  });


  // 퀵메뉴 오픈
  $(".quick-navbar .open-btns").on('click', function() {
    if(!$(".quick-navbar").hasClass('open')) {
      $(".quick-navbar").addClass('open');
    } else {
      $(".quick-navbar").removeClass('open');
    }
  });

  // 퀵메뉴 close에서 open 스크립트 추가
  $(".quick-navbar .inner").on('click', function(e) {
    if(!$(".quick-navbar").hasClass('open')) {
      e.preventDefault();
      $(".quick-navbar").addClass('open');
    }
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

  // 북스토리 즐겨찾기 기능 스크립트
  $(".favorite-btn").on('click', function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  // 북스토리 공통상세 - 관심교재 ON/OFF 스크립트
  $(".scribe-btn").on('click', function() {
    if($(".scribe-btn").hasClass('active')) {
      $(".scribe-btn").removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  //  20250819 추가 수정 :: 북스토리 - 교재상세, 관심교재(즐겨찾기) 클릭시 공통 ON/OFF
  $(".interest").on('click', function(e) {
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      $(".interest").addClass('active');
    } else {
      $(".interest").removeClass('active');
      $(this).removeClass('active');
    }
  });

  // 교재 리스트 - 정렬 팝업 스크립트
  $(".sort-box.acc h4").on('click', function() {
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).siblings('ul').css('display', 'none');
    } else {
      $(this).removeClass('active');
      $(this).siblings('ul').css('display', 'flex');
    }
  });

  $(".textbook .sort-box ul li").on('click', function() {
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });


  // 교재목록 슬라이드
  var thumbSwiper = new Swiper(".thumbSwiper", {
    loop: true,
    
    allowTouchMove: false,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    loopAdditionalSlides: 5, // 마지막 스와이프 썸네일 미생성을 위한 복제 요소 생성
    breakpoints: {
      1285: {
          slidesPerView: 2,
          spaceBetween: 10,
      }
    },
  });

  new Swiper(".viewSwiper", {
    loop: true,
    effect : 'fade',
    fadeEffect: { crossFade: true },
    allowTouchMove: false,
    spaceBetween: 10, // 책 그림자 겹침방지위해설정
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".list-thumb-next",
      prevEl: ".list-thumb-prev"
    },
    thumbs: {
      swiper: thumbSwiper
    }
  });

  $('.thumbSwiper .swiper-wrapper').on('click', '.swiper-slide', function(e) {
    var clickedIndex = $(this).index();
    var realIndex = $(this).data('swiper-slide-index');
    if (typeof realIndex === 'undefined') {
      realIndex = clickedIndex % thumbSwiper.slides.length;
    }
    viewSwiper.slideToLoop(realIndex);
    e.preventDefault();
    e.stopPropagation();
  });
});