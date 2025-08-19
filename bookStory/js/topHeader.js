$(function(){
    document.getElementById("topHeader").innerHTML="<div class='top-bnr' style='background-color:#ffeb7b'><img src='./imgs/top-banner-imgs.png' class='pc' alt='가벼운 시작, 무한한 성장 EBS eBook 구독!'> <img src='./imgs/mob/top-banner-imgs-mob.png' class='mob' alt='가벼운 시작, 무한한 성장 EBS eBook 구독!'></div><div id='Header'><div class='header-inner'><h1><a href='/'>EBS BookStory</a></h1><form name='headerSearch' action='/search/main'><input type='hidden' name='searchKeyword' value=''></form><div class='header-util'><span class='header-sch'><input type='text' name='headerSchSmall' class='sch-view pc' placeholder='검색' value=''> <input type='text' name='headerSchMob' class='sch-inp mb' placeholder='검색' value=''> <button class='btn-sch'>검색</button> </span><a onclick='' href='javascript:;' class='wish-book' title='관심교재'>관심 교재</a> <a onclick='' href='javascript:;' class='shop-pocket' title='장바구니'>장바구니</a> <a href='/notice/list'>공지사항</a> <a href='https://www.ebs.co.kr/customer' target='_blank'>고객센터</a> <a href='javascript:fnLogin();'>로그인</a> <a href='/agency/list'>총판문의</a></div><div class='search'><div><input type='text' name='headerSchPc' placeholder='검색어를 입력하세요.' value=''> <button type='button' class='submit'>검색</button> <a href='javascript:;' class='search-close'>검색창 닫기</a></div></div><div class='header-menu'><button><span>전체메뉴</span></button></div><button class='wish-book' title='관심교재' onclick=''>관심 교재</button></div><div class='gnb-inner'><div class='mGnb'><ul class='swiper-wrapper'><li class='swiper-slide'><a href='/bookStory/bookStoryIndex.html' class='ebook'><span>eBook 구독</span></a></li><li class='swiper-slide'><a href='/bookStory/bookStoryHighMain.html' class='high'>고교</a></li><li class='swiper-slide'><a href='/bookStory/bookStoryMidMain.html' class='middle'>중학</a></li><li class='swiper-slide'><a href='/bookStory/bookStoryEleMain.html' class='elementary'>초등</a></li><li class='swiper-slide'><a href='/bookStory/bookStoryEnglish.html' class='fr01'>ELT</a></li><li class='swiper-slide'><a href='/bookStory/bookStoryEnglish.html' class='fr01'>어학/일반</a></li><li class='swiper-slide'><a href='/event/eventCurrent' class=''>이벤트</a></li><li class='swiper-slide'><a href='/bookStory/bookStoryMyPage.html' onclick='' class='list'>나의 교재방</a></li></ul></div><div id='Gnb'><ul class='gnb-dep01'><li><a href='/bookStory/bookStoryIndex.html' class='ebook'><span>eBook 구독</span></a><div class='gnb-dep02-div ebook' style='display:none'><ul class='gnb-dep02 col'><li><ul class='pt16'><li><a href='/bookStory/bookStoryIndex.html'>eBook 구독</a></li><li><a href='/bookStory/bookStoryUseinfo.html'>eBook 이용 안내</a></li></ul></li></ul></div></li><li><a href='/bookStory/bookStoryHighMain.html' class='high'>고교</a><div class='gnb-dep02-div high' style='display:none'><ul class='gnb-dep02 col'><li><ul class='pt16'><li><a href='/roadmap/high'>로드맵</a></li><li><a href='/sub/high/series?schSeriesArr=ALL'>시리즈</a></li><li><a href='/sub/high/csatLink'>수능연계</a></li></ul></li><li><ul><li><a href='/bookStory/bookStoryList.html'>1학년</a></li><li><a href='/bookStory/bookStoryList.html'>2학년</a></li><li><a href='/bookStory/bookStoryList.html'>3학년/N수</a></li></ul></li></ul></div></li><li><a href='/bookStory/bookStoryMidMain.html' class='middle'><span>중학</span></a><div class='gnb-dep02-div middle' style='display:none'><ul class='gnb-dep02 col'><li><ul class='pt16'><li><a href='/roadmap/middle'>로드맵</a></li><li><a href='/sub/middle/series?schSeriesArr=ALL'>시리즈</a></li></ul></li><li><ul><li><a href='/sub/middle/grade?schGradeArr=M1'>1학년</a></li><li><a href='/sub/middle/grade?schGradeArr=M2'>2학년</a></li><li><a href='/sub/middle/grade?schGradeArr=M3'>3학년</a></li></ul></li></ul></div></li><li><a href='/bookStory/bookStoryEleMain.html' class='elementary'><span>초등</span></a><div class='gnb-dep02-div elem' style='display:none'><ul class='gnb-dep02 col'><li><ul class='pt16'><li><a href='/roadmap/primary'>로드맵</a></li><li><a href='/sub/primary/series?schSeriesArr=ALL'>시리즈</a></li></ul></li><li class='col-2'><ul><li><a href='/sub/primary/grade?schGradeArr=P1'>1학년</a></li><li><a href='/sub/primary/grade?schGradeArr=P2'>2학년</a></li><li><a href='/sub/primary/grade?schGradeArr=P3'>3학년</a></li><li><a href='/sub/primary/grade?schGradeArr=P4'>4학년</a></li><li><a href='/sub/primary/grade?schGradeArr=P5'>5학년</a></li><li><a href='/sub/primary/grade?schGradeArr=P6'>6학년</a></li></ul></li></ul></div></li><li><a href='/bookStory/bookStoryEnglish.html' class='fr01'>ELT</a><div class='gnb-dep02-div' style='display:none'><ul class='gnb-dep02 col pt16'><li><a href='/bookStory/bookStoryEnglish.html'>로드맵</a></li><li class='col-2'><ul><li><a href='/sub/english/12488'>READERS</a></li><li><a href='/sub/english/13182'>SKILL BOOK</a></li></ul></li></ul></div></li><li><a href='/bookStory/bookStoryEnglish.html' class='fr01'>어학/일반</a><div class='gnb-dep02-div' style='display:none'><ul class='gnb-dep02 col pt16'><li><a href='/bookStory/bookStoryEnglish.html'>시리즈</a></li></ul></div></li><li class='one-line-deps'><a href='/event/eventCurrent'>이벤트</a><div class='gnb-dep02-div' style='display:none'><ul class='gnb-dep02 col'><li><a href='/event/eventCurrent'>진행 이벤트</a></li><li><a href='/event/eventComplete'>완료 이벤트</a></li><li><a href='/event/prize/list'>당첨자 발표</a></li></ul></div></li><li class='one-line-deps last-deps'><a href='/bookStory/bookStoryMyPage.html' class='list'>나의 교재방</a><div class='gnb-dep02-div' style='display:none'><ul class='gnb-dep02 col'><li><a onclick='' href='javascript:;'>나의 교재</a></li><li><a onclick='' href='javascript:;'>나의 구매 정보</a></li><li><a onclick='' href='javascript:;'>나의 구독 정보</a></li><li><a onclick='' href='javascript:;'>쿠폰 등록</a></li><li><a onclick='' href='javascript:;'>장바구니</a></li></ul></div></li></ul></div></div><div class='subGnbBack'></div><div class='gnb-sub-dep'><div class='gnb-sub-inner'><div class='gnb-sub-list'><ul class='subscribe'><li data-info='scribe' class='scribe'><a class='' href='../bookStory/bookStoryIndex.html'>eBook 구독</a></li><li data-info='use' class='use'><a class='' href='../bookStory/bookStoryUseinfo.html'>eBook 이용안내</a></li></ul><ul class='high'><li><a href='' class=''>전체로드맵</a></li><li><a href='' class=''>시리즈</a></li><li><a href='' class=''>수능연계</a></li><li><a href='../bookStory/bookStoryList.html' class=''>1학년</a></li><li><a href='../bookStory/bookStoryList.html' class=''>2학년</a></li><li><a href='../bookStory/bookStoryList.html' class=''>3학년/N수</a></li></ul><ul class='middle'><li><a href='' class=''>전체로드맵</a></li><li><a href='' class=''>시리즈</a></li><li><a href='' class=''>공통</a></li><li><a href='' class=''>1학년</a></li><li><a href='' class=''>2학년</a></li><li><a href='' class=''>3학년</a></li></ul><ul class='elementary'><li><a href='' class=''>전체로드맵</a></li><li><a href='' class=''>시리즈</a></li><li><a href='' class=''>공통</a></li><li><a href='' class=''>1학년</a></li><li><a href='' class=''>2학년</a></li><li><a href='' class=''>3학년</a></li><li><a href='' class=''>4학년</a></li><li><a href='' class=''>5학년</a></li><li><a href='' class=''>6학년</a></li></ul><ul class='elt'><li><a href='' class=''>로드맵</a></li><li><a href='' class=''>Readers</a></li><li><a href='' class=''>Skill Book</a></li></ul><ul class='normal'><li><a href='' class=''>로드맵</a></li><li><a href='' class=''>Readers</a></li><li><a href='' class=''>Skill Book</a></li></ul><ul class='event'><li><a href='' class=''>진행 이벤트</a></li><li><a href='' class=''>완료 이벤트</a></li><li><a href='' class=''>당첨자 발표</a></li></ul><ul class='list'><li data-tab='1'><a class='on'>나의 교재</a></li><li data-tab='2'><a class=''>나의 구매정보</a></li><li data-tab='3'><a class=''>나의 구독 정보</a></li></ul></div></div></div><div class='gnb-mini-sub-dep useInfo-tab'><ul class='swiper-wrapper'><li class='swiper-slide mob-tab1'><a href='javascript:void(0);' class='active'>eBook 이용안내</a></li><li class='swiper-slide mob-tab2'><a href='javascript:void(0);' class=''>eBook 단건 결제/환불</a></li><li class='swiper-slide mob-tab3'><a href='javascript:void(0);' class=''>eBook 구독 결제/환불</a></li><li class='swiper-slide mob-tab4'><a href='javascript:void(0);' class=''>주요정책</a></li></ul></div><div class='gnb-mini-sub-dep buy-tab'><ul class='swiper-wrapper'><li class='swiper-slide'><a href='javascript:void(0);' class='active'>ebook 결제내역</a></li><li class='swiper-slide'><a href='javascript:void(0);' class=''>eBook 환불내역</a></li><li class='swiper-slide'><a href='javascript:void(0);' class=''>쿠폰등록</a></li><li class='swiper-slide'><a href='javascript:void(0);' class=''>장바구니</a></li><li class='swiper-slide'><a href='javascript:void(0);' class=''>관심교제</a></li></ul></div><div class='gnb-mini-sub-dep scr-tab'><ul class='swiper-wrapper'><li class='swiper-slide'><a href='./bookStoryMngt.html' class='active'>나의 구독 관리</a></li><li class='swiper-slide'><a href='javascript:void(0);' class=''>구독 환불 내역</a></li><li class='swiper-slide'><a href='javascript:void(0);' class=''>정기 결제 카드 변경</a></li></ul></div></div><div id='totalGnb'><div class='total-gnb-wrap'><div class='total-top'><button class='btn-darkB'>회원가입</button> <button class='btn-dark'>로그인</button></div><div class='total-gnb-tbl'><div class='total-gnb-cell'><h2>eBook</h2><ul class='dep01'><li><a href='/ebook/index'>eBook</a></li><li><a href='/sub/eHigh/grade?schGradeArr=D100'>학년별 교재</a></li></ul></div><div class='total-gnb-cell'><h2>고교</h2><ul class='dep01'><li><a href='/roadmap/high'>전체 로드맵</a></li><li><a href='/sub/high/grade?schGradeArr=D100'>학년별 교재</a></li></ul></div><div class='total-gnb-cell'><h2>중학</h2><ul class='dep01'><li><a href='/roadmap/middle'>전체 로드맵</a></li><li><a href='/sub/middle/grade?schGradeArr=M1'>학년별 교재</a></li></ul></div><div class='total-gnb-cell'><h2>초등</h2><ul class='dep01'><li><a href='/roadmap/primary'>전체 로드맵</a></li><li><a href='/sub/primary/grade?schGradeArr=P1'>학년별 교재</a></li></ul></div><div class='total-gnb-cell'><h2>ELT</h2><ul class='dep01'><li><a href='/bookStory/bookStoryEnglish.html'>전체 로드맵</a></li><li><a href='/sub/english/12488'>ELT 교재</a></li></ul></div><div class='total-gnb-cell'><h2><a href='/event/eventCurrent'>어학/일반</a></h2></div><div class='total-gnb-cell'><h2><a href='/event/eventCurrent'>이벤트</a></h2></div><div class='total-gnb-cell'><h2><a href='/mypage/purchase' onclick=''>나의 교재방</a></h2><ul class='dep01'><li><a href='/mypage/purchase' onclick=''>나의 교재</a></li><li><a href='/mypage/payhist' onclick=''>나의 구매정보</a></li><li><a href='/mypage/bskt' onclick=''>장바구니</a></li></ul></div><div class='total-bnr'><a href='https://book.ebs.co.kr/ebook/tchrCpn'><img src='imgs/promotionImg_77187155046163322.jpg' alt='배너'></a></div></div><p class='total-cust'>고객센터<em>1588-1580</em></p></div><button class='close'>전체메뉴 닫기</button></div><div id='totalDim'></div><form name='modFrm' id='modFrm' method='POST'><input type='hidden' name='userId' id='userId'> <input type='hidden' name='returnUrl' id='returnUrl'></form>";

    
    // 상단 메뉴 Page index active, sub list 보이기
    var pcIdx = $(this).find("#Gnb > ul > li > a");
    var mobIdx = $(this).find("#Header .mGnb ul li a");
    var subList = $(this).find(".gnb-sub-dep ul");
    
    if($("#contentsWrap").hasClass('subscribe')) {
      pcIdx.eq(0).addClass('active');
      mobIdx.eq(0).addClass('active');
      subList.eq(0).addClass('active');

    } else if($("#contentsWrap").hasClass('high')) {
      pcIdx.eq(1).addClass('active');
      mobIdx.eq(1).addClass('active');
      subList.eq(1).addClass('active');

    } else if($("#contentsWrap").hasClass('middle')) {
      pcIdx.eq(2).addClass('active');
      mobIdx.eq(2).addClass('active');
      subList.eq(2).addClass('active');

    } else if($("#contentsWrap").hasClass('elementary')) {
      pcIdx.eq(3).addClass('active');
      mobIdx.eq(3).addClass('active');
      subList.eq(3).addClass('active');

    } else if($("#contentsWrap").hasClass('list')) {
      pcIdx.eq(7).addClass('active');
      mobIdx.eq(7).addClass('active');
      subList.eq(7).addClass('active');

    } else if($("#contentsWrap").hasClass('eng')) {
      pcIdx.eq(4).addClass('active');
      mobIdx.eq(4).addClass('active');
      subList.eq(4).addClass('active');
    }

    // 3뎁스(하위 뎁스) 슬라이더
    new Swiper ('.gnb-mini-sub-dep.useInfo-tab', {
      loop: false,
      speed: 500,
      pagination: false,
      slidesPerView: 'auto',
      breakpoints: {
      1024: { slidesPerView: 'auto'},
      767: { slidesPerView: 'auto' },
      380: { slidesPerView: 'auto' }
      },
      observer: true,
      observeParents: true,
    });
    new Swiper ('.gnb-mini-sub-dep.buy-tab', {
      loop: false,
      speed: 500,
      pagination: false,
      slidesPerView: 'auto',
      breakpoints: {
      1024: { slidesPerView: 'auto'},
      767: { slidesPerView: 'auto' },
      380: { slidesPerView: 'auto' }
      },
      observer: true,
      observeParents: true,
    });
    new Swiper ('.gnb-mini-sub-dep.scr-tab', {
      loop: false,
      speed: 500,
      pagination: false,
      slidesPerView: 'auto',
      breakpoints: {
      1024: { slidesPerView: 'auto'},
      767: { slidesPerView: 'auto' },
      380: { slidesPerView: 'auto' }
      },
      observer: true,
      observeParents: true,
    });
    

    // 3뎁스(하위 뎁스) 메뉴 포커싱
    $('.gnb-mini-sub-dep.useInfo-tab .swiper-slide').on('click', function () {
        var useIdx = $(this).index();
        var useSwiper = $('.gnb-mini-sub-dep.useInfo-tab')[0].swiper;
        
        if (useSwiper) { useSwiper.slideTo(useIdx, 300); }
    });

    $('.gnb-mini-sub-dep.buy-tab .swiper-slide').on('click', function () {
        var buyIdx = $(this).index();
        var buySwiper = $('.gnb-mini-sub-dep.buy-tab')[0].swiper;
        
        if (buySwiper) { buySwiper.slideTo(buyIdx, 300); }
    });

    $('.gnb-mini-sub-dep.scr-tab .swiper-slide').on('click', function () {
        var scrIdx = $(this).index();
        var scrSwiper = $('.gnb-mini-sub-dep.scr-tab')[0].swiper;
        
        if (scrSwiper) { scrSwiper.slideTo(scrIdx, 300); }
    });



    $(".gnb-mini-sub-dep a").on('click', function() {
      if($(".gnb-mini-sub-dep a").hasClass('active')) {
        $(".gnb-mini-sub-dep a").removeClass('active');
        $(this).addClass('active');
      }
    });

    $(".gnb-sub-dep ul li a").on('click', function() {
      if(!$(this).hasClass('on')) {
        $(".gnb-sub-dep ul li a").removeClass('on');
        $(this).addClass('on')
      }
    });


    // 3뎁스 스크립트
    $(".gnb-mini-sub-dep").hide();
    
    $(window).resize(function() {
      var ww = $(window).width();
      if(ww > 1024) { $(".gnb-mini-sub-dep").hide(); }
    });

    // 이용안내 모바일 View 진입 시  스크립트
    var windowWidth = $(window).width();
    var path = window.location.pathname;
    var realPath = path.substring(10);

    if (windowWidth < 767) {
      if(realPath === '/bookStoryIndex.html') {
        $(this).find(".gnb-sub-dep ul li.scribe").children('a').addClass('on');
      }
      if(realPath === '/bookStoryUseinfo.html') {
        $(this).find(".gnb-sub-dep ul li.use").children('a').addClass('on');
        $(".gnb-mini-sub-dep.useInfo-tab").show();
      }
    }

    $(".gnb-sub-dep ul li").on('click', function() {
      if($(this).data('tab') == '1') {
        $(".gnb-mini-sub-dep").hide();

      } else if($(this).data('tab') == '2') {
        $(".gnb-mini-sub-dep.buy-tab").show();
        $(".gnb-mini-sub-dep.scr-tab").hide();
        
      } else if($(this).data('tab') == '3') {
        $(".gnb-mini-sub-dep.buy-tab").hide();
        $(".gnb-mini-sub-dep.scr-tab").show();
      
      } else if($(this).data('info') === 'scribe') { // 이용안내 3뎁스 닫기
        $(".gnb-mini-sub-dep.useInfo-tab").hide();
        
      } else if($(this).data('info') === 'use') { // 이용안내 3뎁스 열기
        $(".gnb-mini-sub-dep.useInfo-tab").show();
      }
    });

    // 이용안내 모바일 tab 스크립트
    var $tabs = $(".useInfo-tab ul li");
    $tabs.on('click', function() {
      if($tabs.hasClass('active')) {
        $tabs.removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('mob-tab1')) {
          $(".tab-con1").show();
          $(".tab-con2").hide();
          $(".tab-con3").hide();
          $(".tab-con4").hide();

        } else if($(this).hasClass('mob-tab2')) {
          $(".tab-con1").hide();
          $(".tab-con2").show();
          $(".tab-con3").hide();
          $(".tab-con4").hide();

        } else if($(this).hasClass('mob-tab3')) {
          $(".tab-con1").hide();
          $(".tab-con2").hide();
          $(".tab-con3").show();
          $(".tab-con4").hide();

        } else if($(this).hasClass('mob-tab4')) {
          $(".tab-con1").hide();
          $(".tab-con2").hide();
          $(".tab-con3").hide();
          $(".tab-con4").show();
        }
      } else {
        $(this).addClass('active');
      }
    });
});
