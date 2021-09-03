// const fs = require('fs')
const path = require('path')
const { NodeSSH } = require('node-ssh')
const config = require('./config.json')

const {
  filename,
  host,
  username,
  rsaPath,
  localPath,
  remotePath,
  shellPath,
  shellName,
} = config

const ssh = new NodeSSH()
ssh.connect({
  host,
  username,
  // port: 22,
  // password: '',
  // tryKeyboard: true,
  privateKey: rsaPath
}).then((res) =>{
  console.log('ssh连接成功')
  return ssh.putFiles([
    {
      local: path.join(localPath, filename),
      remote: `${remotePath}${filename}`,
    },
    {
      local: path.join(__dirname, 'deploy.sh'),
      remote: `${shellPath}${shellName}`,
    },
  ])
}).then(res=>{
  console.log(`${filename} && shell脚本上传成功`)
  return ssh.execCommand(`sh ${shellName} ${filename}`, { cwd: shellPath })
}).then(res=>{
  console.log(res.stdout)
  console.log('shell脚本执行成功')
  exit()
}).catch((err) =>{
  console.log('ssh连接失败')
  console.log(err)
  exit()
})

function exit() {
  ssh.dispose()
  process.exit(0)
}