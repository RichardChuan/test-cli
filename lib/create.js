//
const path = require('path');

const fs = require('fs-extra');
const inquirer = require('inquirer');
module.exports = async function (projectName, options) {
  const cwd = process.cwd(); // 获取当前命令执行时的工作目录
  // console.log(cwd);
  const targetDir = path.join(cwd, projectName); // 目标目录
  if (fs.existsSync(targetDir)) {
    if (options.force) {
      // 如果强制，删除已有
      await fs.remove(targetDir);
    }
  }
};
