module.exports = {
  shell: [
    'node sitemap-to-txt.js',
    'curl -H "Content-Type:text/plain" --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://www.tiven.cn&token=QZWCDMydKCiY8doP"',
  ],
}