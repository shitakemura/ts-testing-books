import {
  WebDriver,
  Builder,
  By,
  Key,
  until,
  Capabilities,
} from 'selenium-webdriver'

jest.setTimeout(20000) // 20seconds

// chromeDriver: Chrome
describe('e2e test with selenium and chromeDriver', () => {
  let chromeDriver: WebDriver

  beforeAll(async () => {
    const chromeCapabilities = Capabilities.chrome()
    chromeCapabilities.set('goog:chromeOptions', {
      args: [
        // '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--lang=en-US',
        // '--user-data-dir=./tmp_user_data',
      ],
    })

    // chromeを起動、WebDriverのインスタンスを取得
    chromeDriver = await new Builder()
      .withCapabilities(chromeCapabilities)
      .build()
  })

  afterAll(async () => {
    await chromeDriver.quit() // chromeを停止
  })

  test('a search keyword will be on the page title in google.com', async () => {
    // access google.com
    await chromeDriver.get('https://www.google.com/ncr') // ncr: Non-Country-Redirect
    // search "webdriver"
    await chromeDriver
      .findElement(By.name('q'))
      .sendKeys('webdriver', Key.RETURN)
    // page title will be "webdriver - Google Search"
    const results = await chromeDriver.wait(
      until.titleIs('webdriver - Google Search'),
      10000
    )

    expect(results).toBe(true)
  })
})

// geckoDriver: Firefox
describe('e2e test with selenium and geckoDriver', () => {
  let geckoDriver: WebDriver

  beforeAll(async () => {
    const fireFoxCapabilities = Capabilities.firefox()
    fireFoxCapabilities.set('moz:firefoxOptions', {
      args: [
        // '-headless',
      ],
    })

    geckoDriver = await new Builder()
      .withCapabilities(fireFoxCapabilities)
      .build()
  })

  afterAll(async () => {
    await geckoDriver.quit()
  })

  test('a search keyword will be on the page title in google.com', async () => {
    await geckoDriver.get('https://www.google.com/ncr')
    await geckoDriver
      .findElement(By.name('q'))
      .sendKeys('webdriver', Key.RETURN)
    const results = await geckoDriver.wait(
      until.titleIs('webdriver - Google Search'),
      10000
    )

    expect(results).toBe(true)
  })
})
