import puppeteer, { Browser } from 'puppeteer'

describe('e2e test with puppeteer', () => {
  let browser: Browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  afterAll(async () => {
    await browser.close()
  })

  test('a search keyword will be on the page title in google.com', async () => {
    // access google.com
    const page = await browser.newPage()
    await page.goto('https://www.google.com/ncr')

    // search "puppeteer"
    await page.type('textarea[name="q"]', 'puppeteer')
    await page.keyboard.press('Enter')

    // wait until page title changes "puppeteer - Google Search"
    await page.waitForNavigation({
      timeout: 2000,
      waitUntil: 'domcontentloaded',
    })

    expect(await page.title()).toBe(
      'puppeteer - Google Search'
    )
  })
})
