const execa = require('execa')

module.exports = async function osa(fn, ...args) {
  const code = `JSON.stringify((${fn})(...${JSON.stringify(args)}))`
  const stdout = (
    await execa('osascript', ['-l', 'JavaScript'], { input: code })
  ).stdout
  try {
    return JSON.parse(stdout)
  } catch (e) {
    throw new Error(`Invalid JSON: ${stdout}`)
  }
}