const fs = require('fs')
const xml2js = require('xml2js')

const Parser = new xml2js.Parser()
// console.log(Parser)
fs.readFile(__dirname + '/public/sitemap.xml', function(err, data) {
  Parser.parseString(data, function (err, result) {
    if (!err) {
      let urls = result.urlset.url
      // console.dir(urls)
      console.log('xml 读取成功')
      console.log(`url条数：${urls.length}`)
      let str = urls.reduce((prev, item)=>{
        prev += `${item.loc[0]} \n`
        return prev
      }, '')
      // console.log(str)
      createTxt(str)
    }
  })
})

function createTxt(str) {
  fs.writeFile('sitemap.txt', str, 'utf8', function(err, res){
    if (!err) {
      console.log('sitemap.txt 写入成功')
      copySitemap()
    }
  })
}

function copySitemap() {
  // copyFileSync
  fs.copyFile('./sitemap.txt', './source/sitemap.txt', function (err, res){
    if (!err) {
      console.log('sitemap.txt copy成功')
    }
  })
}

// var xml = "<root>Hello xml2js!</root>"
//
// Parser.parseString(xml , function (err, result) {
//   console.log(result);
// })
// // 生成xml
// const obj = {name: "Super", Surname: "Man", age: 23};
// const builder = new Xml2js .Builder();
// const xml = builder.buildObject(obj);