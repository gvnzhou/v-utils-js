const path = require('path')
const fs = require('fs')
const ora = require('ora') // 加载样式
const rm = require('rimraf') // 删除包
const copy = require('copy')
const chalk = require('chalk') // 修改控制台中字符串的样式

const rootPath = path.resolve(__dirname, '../')

// 替换模块文件
let copying = ora('copying...')
copying.start()
rm('*.js', err => {
  if (err) throw (err)
  let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
  folderList.forEach((item, index) => {
    copy(`src/${item}/*.js`, rootPath, function (err, files) {
      if (err) throw err;
      if (index === folderList.length - 1) {
        console.log(chalk.cyan('  Copy complete.\n'))
        copying.stop()
      }
    })
  })
})