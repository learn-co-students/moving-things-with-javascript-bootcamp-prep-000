const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {

  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })

  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
      moveDodgerLeft()
    }
  })

  it('runs', () => {
    expect(true).toBe.true
  })
})
