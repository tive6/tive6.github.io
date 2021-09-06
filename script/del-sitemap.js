const rm = require('rimraf');

async function del(path) {
  return new Promise(resolve => {
    rm(path, () => {
      console.log(`${path} deleted`);
      resolve()
    });
  })
}

;( async ()=>{
  await del('./sitemap.txt')
  await del('./source/sitemap.txt')
})();