const process = require("child_process");
const axios = require("axios");
const BAIDU_PUSH_COUNT = 10;
const BING_URL_LIST = [
    "https://tiven.cn/p/5f5cbec7/",
    "https://tiven.cn/p/5790753b/",
    "https://tiven.cn/p/a8974376/",
    "https://tiven.cn/p/cc3c1203/",
    "https://tiven.cn/p/7d2e931b/",
    "https://tiven.cn/p/fca0e73e/",
    "https://tiven.cn/p/e9eb7987/",
    "https://tiven.cn/p/9836898b/",
    "https://tiven.cn/p/a0900327/",
    "https://tiven.cn/p/d41c4425/",
];

(function () {
    pushBdUrl();
    pushUrl();
    // throughPost()
    // setInterval(throughPost, 5000)
})();

async function pushBdUrl() {
    let command =
      'curl -H "Content-Type:text/plain" --data-binary @sitemap.txt "http://data.zz.baidu.com/urls?site=https://tiven.cn&token=99njAs0UcvKK1yWD"';
    let arr = new Array(BAIDU_PUSH_COUNT).fill(1);
    for (let n of arr) {
        let res = await runShell(command);
        console.log(res);
    }
}

function pushUrl() {
    axios({
        url: "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=88c75e5bafce496aacf395f8910594ad",
        method: "POST",
        data: {
            siteUrl: "https://tiven.cn",
            urlList: BING_URL_LIST,
        },
    })
      .then((res) => {
          // console.log(res)
          if (res.status === 200 && res.statusText === "OK") {
              console.log("bing sitemap 推送成功");
          } else {
              console.log("bing sitemap 推送失败");
          }
      })
      .catch((err) => {
          // console.log(JSON.stringify(err))
          console.log("bing sitemap 推送失败");
      });
}

function throughPost() {
    axios({
        url: "https://www.jianshu.com/p/18b5cbc3e702",
    }).then((res) => {
        console.log(res);
    });
}

function runShell(command) {
    return new Promise((resolve) => {
        process.exec(command, (error, stdout, stderr) => {
            if (!error) {
                resolve(stdout);
            } else {
                resolve(error);
            }
        });
    });
}
