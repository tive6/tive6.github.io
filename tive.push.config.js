module.exports = {
  shell: [
    'node sitemap-to-txt.js',
    'curl -H "Content-Type:text/plain" --data-binary @sitemap.txt "http://data.zz.baidu.com/urls?site=https://tiven.cn&token=99njAs0UcvKK1yWD"',
    // 'node script/url-push.js',
    // 'node deploy.js',
  ],
}