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
});