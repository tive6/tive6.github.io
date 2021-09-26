!function (){
  window.getVisits = function(res) {
    if (!res) return
    // let str = JSON.stringify(res, null, 2)
    // console.log(str)
    // let box = document.getElementById('box')
    // box.innerHTML = str
    $('#web_site_today_pv').text(res.todayPv)
    $('#web_site_pv').text(res.sitePv)
    let $pagePv = $('#page_pv')
    if ($pagePv) {
      $pagePv.text(`阅读：${res.pagePv}`)
    }
  }
  
  let script = document.createElement('script')
  let  { host, origin, pathname } = location
  let url = encodeURIComponent(origin+pathname)
  // script.src = `http://127.0.0.1:7001/api/web/jsonp/recordVisits?callback=getVisits&v=${Date.now()}&url=${url}`
  script.src = `https://tiven.cn/api/web/jsonp/recordVisits?callback=getVisits&v=${Date.now()}&url=${url}`
  document.body.appendChild(script)
}();