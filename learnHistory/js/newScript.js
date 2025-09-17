$(function() {
  // 앱 다운로드 - 앨범/목록형 타입 선택
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

  // 학급시스템 초대하기 (동의) - 팝업 동의하기 선택
  $(".invite-popup .agree-btn").on('click', function() {
    $(".invite-popup").hide();
    // location.href = '../learnHistory/detailStatus.html';
  });
 

  // 학급시스템 초대하기 (동의) - 팝업 거절하기 선택
  $(".invite-popup .close, .invite-popup .cancel-btn").on('click', function() {
    $(".invite-popup").hide();
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

  // 공통 - info-ico 툴팁 이벤트 스크립트
  $('.info-ico').on('click', function(e) {
    e.stopPropagation(); // 이벤트 전파 방지
    $('.tool-tip').html($(this).data('text')); // data-text 요소에 따른, 텍스트 변경

    var contain = $(this).parents('.contain'); // 부모 컨텐츠
    var containTop = contain.offset().top; // 부모 컨텐츠 top 시작점
    var containLeft = contain.offset().left; // 부모 컨텐츠 left 시작점
    var eleTop = $(this).offset().top; // 클릭요소 top 값
    var eleLeft = $(this).offset().left; // 클릭요소 left 값
    var rectWidth = $('.tool-tip').outerWidth() / 2; // 가변적 툴팁 넓이 50% 값
    var rectHeight = $('.tool-tip').outerHeight() / 2; // 가변적 툴팁 높이 50% 값
    var tooltipX = eleLeft - containLeft - rectWidth; // 툴팁 실제 X축 위치 값
    var tooltipY = eleTop - containTop - rectHeight; // 툴팁 실제 Y축 위치 값 
    
    if($(this).hasClass('top')) {
      $('.tool-tip').addClass('top');
      $('.tool-tip').css({ top : tooltipY - 25, left: tooltipX + 14 }).show();
    } else {
      $('.tool-tip').removeClass('top');
      $('.tool-tip').css({ top : tooltipY + 50 , left: tooltipX + 14 }).show();
    }
    
  });

  // 툴팁 외부 클릭 시 툴팁 숨기기
  $(document).on('click', function() {
      $('.tool-tip').hide();
  });

  // 툴팁 요소 자체의 클릭 이벤트가 툴팁을 숨기지 않도록 방지
  $('.tool-tip').on('click', function(e) {
      e.stopPropagation();
  });


  // 학급별 학습이력 관리 - 학급생성
  $(".class-box.create").on('click', function() {
    location.href = '../learnHistory/createClass.html';
  });

  // 학급별 학습이력 관리 - 학급생성 PC
  $("#contentsWrap.learn .class-box.create").on('click', function() {
    location.href = '../../bookStory/MyLearnCeateClass.html';
  });

  // 학급별 학습이력 관리 - 학급삭제
  $(".class-delete-ico").on('click', function(e) {
    e.preventDefault();
    var student = false; // 연계된 학생 임시 변수 true, false

    if(student) { // 연계된 학생이 있을 경우
      if(confirm("선택한 학급이 삭제 됩니다. 삭제하겠습니까?")) {
        alert("삭제되었습니다.");
      }
      
    } else { // 연계된 학생이 없을 경우
      if(confirm("학급 삭제 시,\n연계된 학생 내역도 사라지며 삭제된 내역은 복구되지 않습니다.\n그래도 삭제하시겠습니까?")) {
        alert("삭제되었습니다.");
      }
    }
  });

  // 학급별 학습이력 관리 - 학급 정보 수정
  $(".create-class-btn").on('click', function(e) {
    e.preventDefault();
    location.href = '../learnHistory/createClass.html';
  });

  // 학급별 학습이력 관리 - 학급 정보 수정 PC
  $("#contentsWrap.learn .create-class-btn").on('click', function(e) {
    e.preventDefault();
    location.href = '../../bookStory/MyLearnCeateClass.html';
  });

  // 학급별 학습이력 관리 - 학급 초대하기 (APP 기능)
  $(".class-invite-btn").on('click', function(e) {
    e.preventDefault();
    alert("카카오톡 초대하기");
  });

  // 학급별 학습이력 관리 - 학급 복사하기
  $(".class-copy-btn").on('click', function(e) {
    e.preventDefault();
    var copyUrl = 'https://jsh-works.github.io/learnHistory/detailStatus.html';
    window.navigator.clipboard.writeText(copyUrl).then(() => {
      alert("링크 URL이 복사 되었습니다.");
    });
  });
  
  // 학급별 학습이력 관리 - 학급 복사하기 PC
  $("#contentsWrap.learn .class-copy-btn").on('click', function(e) {
    e.preventDefault();
    var copyUrl = 'https://jsh-works.github.io/bookStory/MyLearnMngt.html';
    window.navigator.clipboard.writeText(copyUrl).then(() => {
      // alert("링크 URL이 복사 되었습니다.");
    });
  });

  // 학급별 학습이력 관리 - 교사 인증 받기
  $(".teacher-cert-btn").on('click', function(e) {
    e.preventDefault();
    window.open('https://sso.ebs.co.kr/user/auth', target='_blank');

  });

  // 신규 학급 생성 - 배경색상 선택
  $(".color-box ul li button").on('click', function() {
    if(!$(this).hasClass('acitve')) {
      $(".color-box ul li button").removeClass('active');
      $(this).addClass('active');
    }
  });

  // 신규 학급 생성 - 취소 버튼
  $(".class .cancel-btn").on('click', function() {
    location.href = '../learnHistory/classStatus.html';
  });

  // 신규 학급 생성 - 취소 버튼 PC
  $("#contentsWrap.learn .class .cancel-btn").on('click', function() {
    location.href = '../../bookStory/MyLearnStatus.html';
  });

  // 신규 학급 생성 - 저장 버튼
  $(".class .save-btn").on('click', function() {
    alert("저장되었습니다.");
    location.href = '../learnHistory/detailStatus.html';
  });

  // 신규 학급 생성 - 저장 버튼 PC
  $("#contentsWrap.learn .class .save-btn").on('click', function() {
    // alert("저장되었습니다.");
    location.href = '../../bookStory/MyLearnStatus.html';
  });

  // 학생별 학습이력 - 학습이력 탭 선택
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

  // 학생별 학습이력 - 학생 이름 삭제
  $(".name-del-btn").on('click', function() {
    if(confirm("해당 학생을 삭제하시겠습니까?\n학생 삭제 시, 학생의 학습 이력도 사라지며 삭제된 내역은 복구되지 않습니다.")) {
      alert("삭제되었습니다.");
    }
  });

  // 학생별 학습이력 - 별명 팝업 열기
  $(".alias-btn").on('click', function() {
    $(".alias-popup").css('display', 'flex');
  });

  // 학생별 학습이력 - 별명 팝업 닫기
  $(".alias-popup .close").on('click', function() {
    $(".alias-popup").hide();
  });

  // 학생별 학습이력 - 별명 저장
  var text = '금칙어';
  $(".alias-popup .save-btn").on('click', function() {
    if(text == '금칙어') {
      alert("금칙어 또는 실명이 포함되어있습니다.");
    } else {
      alert("저장되었습니다.");
    }
  });

  // 학생별 학습이력 - 별명 확인
  $(".alias-popup .clear-btn").on('click', function() {
    alert("저장되었습니다.");
    $(".alias-popup").css('display', 'none');
  });

  // 학습결과 보고서 (결과지 다운로드) - 도넛 차트 (열람 률)
  function initializeChart1() {
    var newCtx1 = $("#newDoughnut1");
    var newDoughnut1 = new Chart(newCtx1, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [100, 0], // 1.(실제값(100)) 2.(최대값(100) - 실제값(100) = 남은값(0))
          backgroundColor: ['#2BC1EA', '#EEF1F8'],
          borderColor: ['#2BC1EA', '#EEF1F8'],
          borderWidth: 1,
          cutout: "80%",
        }]
      },
      options: {
        plugins: {
          annotation: {
            annotations: {
              centerLabel: {
                type: 'doughnutLabel',
                content: ({chart}) => [
                  chart.data.datasets[0].data[0] + '%' // 현재값 표시
                ],
                font: { size: 36, weight : 700 }
              }
            }
          }
        },
        responsive: false,
        cutoutPercentage: 80,
        tooltips: { enabled: false },
        events: [],
      },
    });
  }
  
  // 학습결과 보고서 (결과지 다운로드) - 도넛 차트 (풀이 율)
  function initializeChart2() {
    var newCtx2 = $("#newDoughnut2");
    var newDoughnut2 = new Chart(newCtx2, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [70, 30], // 1.(실제값(70)) 2.(최대값(100) - 실제값(70) = 남은값(30))
          backgroundColor: ['#4165F4', '#EEF1F8'],
          borderColor: ['#4165F4', '#EEF1F8'],
          borderWidth: 1,
          cutout: "80%",
        }]
      },
      options: {
        plugins: {
          annotation: {
            annotations: {
              centerLabel: {
                type: 'doughnutLabel',
                content: ({chart}) => [
                  chart.data.datasets[0].data[0] + '%' // 현재값 표시
                ],
                font: { size: 36, weight : 700 }
              }
            }
          }
        },
        responsive: false,
        cutoutPercentage: 80,
        tooltips: { enabled: false },
        events: [],
      },
    });
  }

  // 학습결과 보고서 (결과지 다운로드) - 도넛 차트 (최종,최초 정답률)
  function initializeChart3() {
    var newCtx3 = $("#newDoughnut3");
    var newDoughnut3 = new Chart(newCtx3, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [40, 68], // 1.(실제값(40)) 2.(최대값(100) - 실제값(40) = 남은값(60))
          backgroundColor: ['#A041F4', '#EEF1F8'],
          borderColor: ['#A041F4', '#EEF1F8'],
          borderWidth: 1,
          cutout: "80%",
        }]
      },
      options: {
        plugins: {
          annotation: {
            annotations: {
              centerLabel: {
                type: 'doughnutLabel',
                content: ({chart}) => [
                  chart.data.datasets[0].data[0] + '%' // 현재값 표시
                ],
                font: { size: 36, weight : 700 }
              }
            }
          }
        },
        responsive: false,
        cutoutPercentage: 80,
        tooltips: { enabled: false },
        events: [],
      },
    });
  }

  // 학습결과 보고서 (결과지 다운로드) - 팝업 열기
  $(".goDetails").on('click', function() {
    $(".result-popup").css('display', 'flex');
    initializeChart1(); // 열람 률 도넛 차트
    initializeChart2(); // 풀이 율 도넛 차트
    initializeChart3(); // 최종(최초) 정답률 도넛 차트
  });

  // 학습결과 보고서 (결과지 다운로드) - 팝업 닫기
  $(".result-popup .close").on('click', function() {
    $(".result-popup").hide();
  });
  
});