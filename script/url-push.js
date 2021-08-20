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
            'https://tiven.cn/p/d585de37/',
            'https://tiven.cn/p/cf14cb7c/'
        ],
    }
}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(JSON.stringify(err))
})