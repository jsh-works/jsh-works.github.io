$(function(){
  
  /** Tab Menu Event */
  $(".menu-nav ul li").on('click', function(){
    if($(this).data('layer') === "scribe") {
      $(".book-details.scribe").fadeIn();
      $(".book-details.ebook").hide();
      $(".book-details.paper").hide();

    } else if($(this).data('layer') === "ebook") {
      $(".book-details.scribe").hide();
      $(".book-details.ebook").fadeIn();
      $(".book-details.paper").hide();

    } else if($(this).data('layer') === "paper") {
      $(".book-details.scribe").hide();
      $(".book-details.ebook").hide();
      $(".book-details.paper").fadeIn();
    }


    if($(".menu-nav ul li").hasClass('active')) {
      $(".menu-nav ul li").removeClass('active');
      $(this).addClass('active');
      $('.overlay').css({ left: $(this).prevAll().length * 142 + "px" });
    } else {
      $(".menu-nav ul li").removeClass('active');
    }
  });

  /** Thumb hover Event */
  $(".thumb-ico").hover(function(){
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

  /** Favorite Click Event */
  $(".favorite-ico").on('click', function(){
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});