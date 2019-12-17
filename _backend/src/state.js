const fs = require('fs')
const contentPath = './content.json'

function save(content) {
  const contentSTR = JSON.stringify(content)
  return fs.writeFileSync(contentPath, contentSTR)
}

function load() {
  const fileBuffer = fs.readFileSync(contentPath, 'utf-8')
  const json = JSON.parse(fileBuffer)
  return json
}

module.exports = {
  save,
  load
}
