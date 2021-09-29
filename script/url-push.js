const axios = require('axios')

/*
curl -H "Content-Type:application/json" -d 'siteUrl=https://tiven.cn' -d 'url="https://tiven.cn/p/cf14cb7c/"' -X POST "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=88c75e5bafce496aacf395f8910594ad"
* */

init()

function init () {
    pushUrl()
    // throughPost()
    // setInterval(throughPost, 5000)
}

function pushUrl () {
    axios({
        url: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=88c75e5bafce496aacf395f8910594ad',
        method: 'POST',
        data: {
            siteUrl: 'https://tiven.cn',
            urlList: [
                'https://tiven.cn/p/5f5cbec7/',
                'https://tiven.cn/p/fca0e73e/',
                'https://tiven.cn/p/a8974376/',
                'https://tiven.cn/p/cc3c1203/',
                'https://tiven.cn/p/7d2e931b/',
                'https://tiven.cn/p/e9eb7987/',
                'https://tiven.cn/p/f216c7d8/',
                'https://tiven.cn/p/9836898b/',
                'https://tiven.cn/p/a0900327/',
                'https://tiven.cn/p/d41c4425/',
            ],
        }
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(JSON.stringify(err))
    })
}

function throughPost () {
    axios({
        url: 'https://www.jianshu.com/p/18b5cbc3e702',
    }).then(res=>{
        console.log(res)
    })
}


