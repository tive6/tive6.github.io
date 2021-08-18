(function($){
  $.fn.snow = function(options){
    var $flake = $('<div class="snowbox" />').html('&#10052;'),
      documentHeight  = $(window).height(),
      documentWidth   = $(window).width(),
      defaults = {
        minSize     : 10,
        maxSize     : 20,
        newOn       : 1000,
        flakeColor  : "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
      },
      options = $.extend({}, defaults, options);
    var interval= setInterval( function(){
      var startPositionLeft = Math.random() * documentWidth + 100,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        endPositionTop = documentHeight + 100,
        endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
        durationFall = documentHeight * 10 + Math.random() * 5000;
      $flake.clone().appendTo('#snow-wrap').css({
        left: startPositionLeft,
        opacity: startOpacity,
        'font-size': sizeFlake,
        color: options.flakeColor
      }).animate({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.2
      },durationFall,'linear',function(){
        $(this).remove()
      });
    }, options.newOn);
  };
})(jQuery);
$(function(){
  var $nowWrap = $('<div id="snow-wrap"/>')
  $nowWrap.appendTo('body');
  var size = (/(Mobile)/).test(window.navigator.userAgent) ? [5, 25] : [10, 40]
  $.fn.snow({
    minSize: size[0], /* 定义雪花最小尺寸 */
    maxSize: size[1],/* 定义雪花最大尺寸 */
    newOn: 300  /* 定义密集程度，数字越小越密集 */
  });
});