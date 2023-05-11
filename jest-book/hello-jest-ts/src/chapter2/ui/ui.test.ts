import { JSDOM, DOMWindow } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(
  path.resolve(__dirname, './index.html'),
  'utf8'
)

describe('simple ui test', () => {
  let document: Document
  let window: DOMWindow

  beforeEach(() => {
    window = new JSDOM(html, {
      runScripts: 'dangerously',
    }).window
    document = window.document
  })

  test("doesn't show message at the initial state", () => {
    const message = document.querySelector('#message > p') // messageは以下のpタグ要素
    expect(message).toBe(null)
  })

  test('shows a message after clicking the button', () => {
    const button = document.querySelector('#showMessage') // showMessageボタン要素
    const click = new window.MouseEvent('click')
    button?.dispatchEvent(click) // buttonをclick

    const message = document.querySelector('#message > p') // message配下のpタグ
    expect(message?.textContent).toBe('You Passed!!!')
  })

  test('shows only one message after clicking the button twice', () => {
    const button = document.querySelector('#showMessage')
    const click = new window.MouseEvent('click')
    button?.dispatchEvent(click)
    button?.dispatchEvent(click)

    const messages =
      document.querySelectorAll('#message > p')
    expect(messages.length).toBe(1)
    expect(messages[0].textContent).toBe('You Passed!!!')
  })
})
