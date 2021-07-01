const AdmZip = require('adm-zip');
const rm = require('rimraf');
const fs = require('fs');
// console.log(process.argv)

fs.exists('./public', (s) => {
  if (s) {
    handle();
  } else {
    console.log('dist目录不存在');
  }
});

function handle() {
  // console.log(process.argv);
  const ver = process.argv.length > 2 && process.argv.slice(-1)[0] || '01';
  const t = new Date();
  const month = t.getMonth() + 1;
  const day = t.getDate();
  const date = `${t.getFullYear()}${month > 9 ? month : `0${month}`}${day > 9 ? day : `0${day}`}`;
  // console.log(date)
  // creating archives
  const filename = `hexo-${date}-${ver}.zip`;
  const zip = new AdmZip();
  zip.addLocalFolder('./public');
  zip.writeZip(`D:/zip/${filename}`);
  console.log(`${filename} 压缩完成`);
  // extracting archives
  // var unzip = new AdmZip('C:/Users/zhouxianfu/Desktop/zip/dist.zip')
  // unzip.extractAllTo("C:/Users/zhouxianfu/Desktop/git/zmio", /*overwrite*/true)

  // rm('./dist', () => { // 删除当前目录
  //   console.log('dist deleted');
  // });
}
