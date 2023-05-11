import {
  Browser,
  chromium,
  firefox,
  webkit,
} from 'playwright'

describe.each([
  { browserType: chromium, browserName: 'chromium' },
  { browserType: firefox, browserName: 'firefox' },
  { browserType: webkit, browserName: 'webkit(safari)' },
])(
  'e2e test with playwright for $browserName',
  ({ browserType }) => {
    let browser: Browser

    beforeAll(async () => {
      browser = await browserType.launch()
      // ブラウザの挙動を見たい場合は headless: false を指定
      //   browser = await browserType.launch({
      //     headless: false,
      //   })
    })

    afterAll(async () => {
      await browser.close()
    })

    test('a search keyword will be on the page title in google.com', async () => {
      const page = await browser.newPage({
        recordVideo: {
          dir: 'videos',
        },
      })
      await page.goto('https://www.google.com/ncr')
      await page.type('textarea[name="q"]', 'playwright')
      await page.keyboard.press('Enter')

      await page.waitForURL(
        'https://www.google.com/search?q=playwright*',
        {
          timeout: 2000, // 2 sec
        }
      )

      expect(await page.title()).toBe(
        'playwright - Google Search'
      )

      await page.close()
    })
  }
)
