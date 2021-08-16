;(function ($) {
  // 弹出搜索框
  $('#nav-search-btn').on('click', function () {
    // $('.site-search-form').slideDown()
    $('#local-search-input').val('').focus()
    $('#container').addClass('hidden')
    $('.site-search-form').addClass('show')
    $('#search-mask').fadeIn();
  })

  $('#local-search-close').on('click', function(){
    hideSearch()
  });

  $('#search-mask').on('click', function(){
    hideSearch()
  });

  $('.site-search-form').on('click', function(e){
    e.stopPropagation()
  });
})(jQuery)


function hideSearch() {
  // $('.site-search-form').slideUp()
  $('#local-search-result').html('')
  $('#container').removeClass('hidden')
  $('.site-search-form').removeClass('show')
  $('#search-mask').fadeOut();
}