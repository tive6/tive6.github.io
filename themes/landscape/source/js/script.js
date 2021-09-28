;(function ($) {
  // Share
  $('body')
    .on('click', function () {
      $('.article-share-box.on').removeClass('on')
    })
    .on('click', '.article-share-link', function (e) {
      e.stopPropagation()

      var $this = $(this),
        url = $this.attr('data-url'),
        encodedUrl = encodeURIComponent(url),
        id = 'article-share-box-' + $this.attr('data-id'),
        offset = $this.offset()

      if ($('#' + id).length) {
        var box = $('#' + id)

        if (box.hasClass('on')) {
          box.removeClass('on')
          return
        }
      } else {
        var html = [
          '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
          '<a href="https://twitter.com/intent/tweet?url=' +
            encodedUrl +
            '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
          '<a href="https://www.facebook.com/sharer.php?u=' +
            encodedUrl +
            '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
          '<a href="http://pinterest.com/pin/create/button/?url=' +
            encodedUrl +
            '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
          '<a href="https://plus.google.com/share?url=' +
            encodedUrl +
            '" class="article-share-google" target="_blank" title="Google+"></a>',
          '</div>',
          '</div>',
        ].join('')

        var box = $(html)

        $('body').append(box)
      }

      $('.article-share-box.on').hide()

      box
        .css({
          top: offset.top + 25,
          left: offset.left,
        })
        .addClass('on')
    })
    .on('click', '.article-share-box', function (e) {
      e.stopPropagation()
    })
    .on('click', '.article-share-box-input', function () {
      $(this).select()
    })
    .on('click', '.article-share-box-link', function (e) {
      e.preventDefault()
      e.stopPropagation()

      window.open(
        this.href,
        'article-share-box-window-' + Date.now(),
        'width=500,height=450',
      )
    })

  // Caption
  $('.article-entry').each(function (i) {
    $(this)
      .find('img')
      .each(function () {
        if ($(this).parent().hasClass('fancybox')) return

        var alt = this.alt

        if (alt) $(this).after('<span class="caption">' + alt + '</span>')

        $(this).wrap(
          '<a href="' +
            this.src +
            '" title="' +
            alt +
            '" class="fancybox"></a>',
        )
      })

    $(this)
      .find('.fancybox')
      .each(function () {
        $(this).attr('rel', 'article' + i)
      })
  })

  if ($.fancybox) {
    $('.fancybox').fancybox()
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200

  var startMobileNavAnim = function () {
    isMobileNavAnim = true
  }

  var stopMobileNavAnim = function () {
    setTimeout(function () {
      isMobileNavAnim = false
    }, mobileNavAnimDuration)
  }

  $('#main-nav-toggle').on('click', function () {
    if (isMobileNavAnim) return

    startMobileNavAnim()
    $container.toggleClass('mobile-nav-on')
    stopMobileNavAnim()
  })

  $('#wrap').on('click', function () {
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return

    $container.removeClass('mobile-nav-on')
  })

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

document.addEventListener('DOMContentLoaded', function(){
  var throttle = function(fn, delay){
    var timer = null;
    return function(){
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay);
    };
  };

  $(document).scroll(throttle(function() {
    var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器
    if($scrollTop > 300) { //滚动高度可调
      $("#fixed-btn").fadeIn();
    } else {
      $("#fixed-btn").fadeOut();
    };
  }, 200))

  $("#fixed-btn").on("click", function() {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  })
  /* 文章搜索 */
  var path = "/search.xml";
  searchFunc(path, 'local-search-input', 'local-search-result');

  // 输出字符画
  var logoStr = `
##############################
##############################
##############################
##############################
######jjjjjjjjjjjjjjjjjjj#####
######jjjjjjjj#jjjjjjjjjj#####
######jjjjjjjjj#jjjjjjjj######
#####jjjjjjjjjjj#jjjjjjj######
#####jjjjjjjjjjjjjjjjjjj######
#####jjjjjjjjjjjj#jjjjjj######
###########jjjjjj#############
###########jjjjjj#############
##########jjjjjjj#############
##########jjjjjj##############
##########jjjjjj##############
##########jjjjjj##############
#########jjjjjjj##############
#########jjjjjj###############
#########jjjjjj###############
#########jjjjjj###############
#########jjjjjj###############
########jjjjjj################
########jjjjjj################
##############################
##############################
##############################
`
  var logStr =  logoStr.split('').join(' ')
  console.log('%c%s', 'color:green', logStr)
  console.log('%c欢迎访问『天問小站』：', 'color:red', 'https://tiven.cn')
});

// 百度推送
function pushBD() {
  var bp = document.createElement('script');
  var protocol = window.location.protocol;
  if (protocol.includes('https')) {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  document.body.appendChild(bp)
}