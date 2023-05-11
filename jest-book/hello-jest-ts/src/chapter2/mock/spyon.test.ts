describe('Math.random with SpyOn', () => {
  // Math.random()関数をmock化
  const mockedRandom = jest.spyOn(Math, 'random')

  afterEach(() => {
    mockedRandom.mockRestore() // mock関数を元の関数に戻す
  })

  test('Math.random return 1', () => {
    // Math.random()関数を上書き
    mockedRandom.mockImplementation(() => 1)
    expect(Math.random()).toBe(1)
  })

  test('Math.random return under 1', () => {
    expect(Math.random()).toBeLessThan(1)
    expect(Math.random() < 1).toBe(true)
  })
})
