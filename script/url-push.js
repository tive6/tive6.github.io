const axios = require('axios')

/*
curl -H "Content-Type:application/json" -d 'siteUrl=https://tiven.cn' -d 'url="https://tiven.cn/p/cf14cb7c/"' -X POST "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=88c75e5bafce496aacf395f8910594ad"
* */

axios({
    url: 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=88c75e5bafce496aacf395f8910594ad',
    method: 'POST',
    data: {
        siteUrl: 'https://tiven.cn',
        urlList: [
            'https://tiven.cn/p/661a7b1e/',
            'https://tiven.cn/p/3483c10a/',
            'https://tiven.cn/p/ba033cf5/',
            'https://tiven.cn/p/b87d03eb/',
            'https://tiven.cn/p/26a2eea/',
            'https://tiven.cn/p/367439f7/',
            'https://tiven.cn/p/4f5362b7/',
            'https://tiven.cn/p/662250b0/',
            'https://tiven.cn/p/1f405e26/',
            'https://tiven.cn/p/d585de37/',
        ],
    }
}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(JSON.stringify(err))
})