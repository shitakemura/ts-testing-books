// モックのリセット
describe('reset mocks with jest.fn', () => {
  const targetDate = '2020-12-25'
  const mockDate = new Date('2019-12-25')

  beforeEach(() => {
    // Date関数を上書き
    Date = jest.fn(
      () => mockDate
    ) as unknown as jest.MockedFunction<typeof Date>
  })

  test('jest.clearAllMocks', () => {
    // mockDateで上書きされているのでDate()はmockDateを返す
    expect(new Date(targetDate)).toEqual(mockDate)
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .calls
    ).toEqual([['2020-12-25']])
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .results
    ).toEqual([{ type: 'return', value: mockDate }])

    jest.clearAllMocks()

    // mockのプロパティが全てリセット
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .calls
    ).toEqual([])
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .results
    ).toEqual([])

    // mock関数の戻り値は引き続き有効
    expect(new Date(targetDate)).toEqual(mockDate)
  })

  test('jest.resetAllMocks', () => {
    expect(new Date(targetDate)).toEqual(mockDate)
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .calls
    ).toEqual([['2020-12-25']])
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .results
    ).toEqual([{ type: 'return', value: mockDate }])

    jest.resetAllMocks()

    // mock関数のプロパティ、戻り値が全てリセット
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .calls
    ).toEqual([])
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .results
    ).toEqual([])
    expect(new Date(targetDate)).toEqual({}) // default value: {}
  })

  test('jest.restoreAllMocks', () => {
    expect(new Date(targetDate)).toEqual(mockDate)
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .calls
    ).toEqual([['2020-12-25']])
    expect(
      (Date as jest.MockedFunction<typeof Date>).mock
        .results
    ).toEqual([{ type: 'return', value: mockDate }])

    jest.restoreAllMocks()

    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([])
    expect(new Date(targetDate)).toEqual({})
  })
})
