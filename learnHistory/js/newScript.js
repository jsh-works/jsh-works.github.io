$(function() {
  // js.....
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

  // 나의 학습이력 관리 - 교재열람 progress bar
  var currentValue = $(".value .current-val").text(); // 현재 학습페이지
  var totalValue = $(".value .total-val").text(); // 전체 페이지
  var realScore = (currentValue / totalValue) * 100; // 실제 백분율 값
  // console.log(realScore);

  $(".progress").width(totalValue); // 프로그래스바 전체 값
  $(".progress .score").width(realScore); // 프로그래스바 현재 값

  if(realScore == 100) {
    $(".value .current-val").css('color', '#F55149');
    $(".progress .score").css('background-color', '#F55149');
  }

  // 나의 학습이력 관리 - 문제풀이
  var currentProblem = $(".problem .current-val").text(); // 현재 학습페이지
  var totalProblem = $(".problem .total-val").text(); // 전체 페이지

  if(currentProblem === totalProblem) {
    $(".problem .current-val").css({
      'color' : '#444',
      'font-weight' : '400'
    });
    $(".problem-status").text("완료");
  } else {
    $(".problem-status").text("진행중");
  }

  const toggleList = document.querySelectorAll(".switch");
    toggleList.forEach(($toggle) => {
      $toggle.onclick = () => {
        $toggle.classList.toggle('active');
      }
    });
});