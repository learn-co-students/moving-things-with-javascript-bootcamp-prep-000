const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {
  
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })
  

 1) index runs:
     TypeError: Cannot read property 'be' of undefined
      at Context.it (test/index-test.js:16:20)
