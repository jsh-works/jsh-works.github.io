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
  var list ="";

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
    console.log(select);
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
  new Swiper ('.event-slide-banner', {
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
    navigation: {
        nextEl: '.evt-slide-btn-next',
        prevEl: '.evt-slide-btn-prev',
    },
  });

  // 초중고교 EBS Picks 슬라이드
  new Swiper ('.list-slider', { // mobile
		slidesPerView:5,
    spaceBetween: 12,
    observer: true,
    observeParents: true,
    loop: false,
    grabCursor: false,
    allowTouchMove: false,
    autoplay:false,
    breakpoints: {
        550: {
            slidesPerView: 2.8,
            spaceBetweenSlides: 12,
            allowTouchMove: true,
            grabCursor: true,
        },
        768: {
            slidesPerView: 3.8,
            allowTouchMove: true,
            grabCursor: true,
        }
    },
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
      // console.log(scrollLeft + elemWidth, scrollWidth);


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


  // EBS eBook 체험하기 pc event
  $(document).on('click', '.scroll-conts-box ul li', function () {
    var idx = $(this).index();
    var $that = $(this).parents('.scroll-conts-box');
    $that.find('.swiper-pagination span').eq(idx).trigger('click');
  });


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
  $(window).scroll(function () {
    var winPosY = $(document).scrollTop();
    var offset = $(".btn-items").offset();
    var top = offset.top;

    if(winPosY > top) {
      $(".floating").css('display','block');
    } else {
      $(".floating").css('display','none');
    }
  });

  // 대상 교재 팝업 열기
  $(".quick-btn").on('click', function() {
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

    } else if($(this).hasClass('list-type')) { // 목록 형태
      $('.album-type').removeClass('on');
      $('.list-type').addClass('on');
      $(".mybook-list-box.albumType").hide();
      $(".mybook-list-box.listType").show();
    } else {
      return false;
    }
  });

  // 나의 교재방 모바일 상단 탭 영역 스크립트
  $(".sort-wrap.mob ul li").on('click', function() {
    
    if($(!$(this).hasClass('active'))) {
      $(".sort-wrap.mob ul li").removeClass('active');
      $(this).addClass('active');

      if($(this).data('tab') == '1') {
        $(".sub-sort .buy-sub-list").hide();
        $(".sub-sort .scr-sub-list").hide();

      } else if($(this).data('tab') == '2') {
        $(".sub-sort .buy-sub-list").show();
        $(".sub-sort .scr-sub-list").hide();
        
      } else if($(this).data('tab') == '3') {
        $(".sub-sort .buy-sub-list").hide();
        $(".sub-sort .scr-sub-list").show();
      }
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


  function albumTypeFnc() {
    if(windowWidth > 1024) { // PC
      for(var i = 1; i < 3; i++) {
        album+=`<ul><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="expire">만료: 2025-06-24</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button></div><span class="buy">구매</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button></div><span class="buy">구매</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="buy">구매</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="expire">만료: 2025-06-24</span></div></li></ul>`;
      }

      $(".mybook-list-box.albumType").html(album);

    } else {
      for(var i = 1; i < 3; i++) { // Mobile
        album+=`<ul><li><div class="textbook-box"><img src="./imgs/books_example.png" class="mob-thumb" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="expire">만료: 2025-06-24</span></div></li><li><div class="textbook-box"><img src="./imgs/books_example.png" class="mob-thumb" alt="교재 이미지" /><i class="subscribe-ico"></i><div class="hover-btns"><button class="view-textbook">교재 보기</button><button class="view-commentary">해설지 보기</button><button class="view-description">교재 설명 보기</button></div><span class="buy">구매</span></div></li></ul>`;
      }

      $(".mybook-list-box.albumType").html(album);
    }
  }

  function listTypeFnc() {
    // PC, Mobile 동일
    for(var i = 1; i < 2; i++) {
      list+=`<li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li><li><div class="list-textbook-box mob-thumb"><a href="./bookStoryView.html"><img src="./imgs/books_example.png" alt="교재 이미지" /></a><i class="subscribe-ico"></i><div class="list-exp"><h4>EBS 2026 학년도 수능특강 사용설명서 독서</h4><dl class="purch-date"><dt>구매일</dt><dd>2025년 6월 25일</dd></dl><dl class="down-date"><dt>내려 받은 일</dt><dd>2025년 6월 25일</dd></dl><dl class="expir-date"><dt>만료일</dt><dd>2025년 6월 25일</dd></dl></div><div class="list-btns"><button class="view-textbook-btn">교재 보기</button><button class="view-commentary-btn">해설지 보기</button></div></div></li>`;
    }
    $(".mybook-list-box.listType").html('<ul>'+ list +'</ul>');
  }

  albumTypeFnc();
  listTypeFnc();

  $(".more-btn").on('click', function() {
    albumTypeFnc();
    listTypeFnc();
  });

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


  // 스피너 함수
  function Spinner() {
    document.getElementsByClassName('ebsebs-spinner')[0].style.display = "block";
    const progressBar = document.getElementById('progressbar');
    let progress = 0;

    function updateProgress() {
      progress += 10; // 한번에 채워지는 양
      if (progress <= 100) {
          progressBar.value = progress;
      } else {
          clearInterval(interval);
          document.getElementsByClassName('ebsebs-spinner')[0].style.display = 'none';
      }
    }
    const interval = setInterval(updateProgress, 100); // 속도 조절
  }

});