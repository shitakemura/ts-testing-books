// jest.fn()を利用したモックオブジェクトの作成
describe('jest.fn()', () => {
  test('mock object specification', () => {
    const mockFunction = jest.fn()

    // jest.fn()のデフォルトの返り値はundefined
    expect(mockFunction('foo', 'bar')).toBe(undefined)

    expect(mockFunction).toHaveProperty('mock')
    // mock.callsはmockFunctionを呼び出した引数を保持
    expect(mockFunction.mock).toHaveProperty('calls')
    // mock.resultsはmockFunctionを呼び出した返り値(object)を保持
    expect(mockFunction.mock).toHaveProperty('results')

    // 1回呼び出された (配列の長さ = 呼び出し回数)
    expect(mockFunction.mock.calls).toHaveLength(1)
    expect(mockFunction.mock.calls[0]).toEqual([
      'foo',
      'bar',
    ])

    expect(mockFunction.mock.results).toHaveLength(1)

    // resultsプロパティはtypeとvalueを含む
    expect(mockFunction.mock.results[0].value).toBe(
      undefined
    )
    // type: return(正常終了), throw(異常終了), incomplete(実行中)
    expect(mockFunction.mock.results[0].type).toBe(
      'return'
    )
  })
})

test('return `Hello`', () => {
  const mockFunction = jest.fn(() => 'Hello')
  // 以下も同じ
  // const mockFunction = jest.fn().mockImplementation(() => 'Hello')
  expect(mockFunction()).toBe('Hello')
  //   expect(mockFunction.mock.results[0].value).toBe('Hello')
})

test('return `Hello` once then it returns `Goodbye`', () => {
  const mockFunction = jest
    .fn()
    .mockImplementationOnce(() => 'Hello')
    .mockImplementationOnce(() => 'Goodbye')

  expect(mockFunction()).toBe('Hello')
  expect(mockFunction()).toBe('Goodbye')
  expect(mockFunction()).toBe(undefined) // default return value is undefined
})
