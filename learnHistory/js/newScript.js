$(function() {
  $(".types button").on('click', function() {
    if($(this).hasClass('album-type')) {
      $('.album-type').addClass('on');
      $('.list-type').removeClass('on');
      $(".mytextbook-list ul.album").show();
      $(".mytextbook-list ul.list").hide();
      
    } else {
      $('.album-type').removeClass('on');
      $('.list-type').addClass('on');
      $(".mytextbook-list ul.album").hide();
      $(".mytextbook-list ul.list").show();
    }
  });

  // 나의 학습이력 관리 - 학습이력 동의여부
  const toggleList = document.querySelectorAll(".switch");
  toggleList.forEach(($toggle) => {
    $toggle.onclick = () => {
      if($toggle.classList.contains('active')) {
        $toggle.classList.remove('active');
        alert("해당 교재의 학습이력은 더 이상 선생님께 공유되지 않습니다.");
      } else {
        $toggle.classList.add('active');
      }
    }
  });

  // 상세보기
  $(".goDetails").on('click', function() {
    alert('팝업띄우기 popup');
  });

  // info 버튼 말풍선 스크립트
  $(".info").on('click', function() {
    var clickPosition = $(this).offset();
    var thisLeft = $(this).position().left;
    if(!$(".info").hasClass('active')) {
      $(this).addClass('active');
      $('.helpTip').show();
      $('.helpTip').css({
        top: clickPosition.top + $(this).outerHeight(),
        left : thisLeft - 35
      })
    } else {
      $(".info").removeClass('active');
      $('.helpTip').hide();
    }
  });

  // 학생별/교재별 학습이력 선택
  $(".tab-con button").on('click', function() {
    if(!$(this).hasClass('acitve')) {
      $(".tab-con button").removeClass('active');
      $(this).addClass('active');
    }

    if($(this).hasClass('type-student')) {
      $(".student-contents").show();
      $(".textbook-contents").hide();

    } else if($(this).hasClass('type-textbook')) {
      $(".textbook-contents").show();
      $(".student-contents").hide();
    }
  });

  // 학생별 학습이력 - 총 학습 교재 수 open 보기
  $(".detail-btn").on('click', function() {
    $(this).toggleClass('active');

    if($(this).hasClass('active')) {
      $(".detail-inner").addClass('open');
    } else {
      $(".detail-inner").removeClass('open');
    }
  });


  // 별명 팝업 열기
  $(".alias-btn").on('click', function() {
    $(".alias-popup").css('display', 'flex');
  });

  // 별명 팝업 닫기
  $(".alias-popup .close").on('click', function() {
    $(".alias-popup").hide();
  });

  var text = '금칙어';
  $(".save-btn").on('click', function() {
    if(text == '금칙어') {
      alert("금칙어가 포함되어있습니다.");
    } else {
      alert("저장이 완료되었습니다.");
    }
  });

  $(".clear-btn").on('click', function() {
    alert("변경되었습니다.");
    $(".alias-popup").css('display', 'none');
  });

  
});