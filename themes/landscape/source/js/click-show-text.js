var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array
    ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 5,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      // "font-weight": "bold",
      "font-size": "12px",
      "color": getRandomColors()
    });
    $("body").append($i);
    $i.animate({
        "top": y - 180,
        "opacity": 0
      },
      3000,
      function() {
        $i.remove();
      });
  });
  let timer = setTimeout(function(){
    delay()
    clearTimeout(timer);
  }, 2000);
});

/* 生成随机颜色 */
function getRandomColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b},1)`;
}

function delay() {
  $(".buryit").removeAttr("onclick");
}