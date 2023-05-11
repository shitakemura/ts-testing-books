describe('group1', () => {
  test('test case1', () => {
    expect(true).toBe(true)
  })
  test('test case2', () => {
    expect(true).toBe(true)
  })
  test('test case3', () => {
    expect(true).toBe(true)
  })

  describe('group2', () => {
    test('test case1', () => {
      expect(true).toBe(true)
    })
  })
})

let commonData: { userName: string; email: string }
describe('test with beforeAll', () => {
  beforeAll(() => {
    commonData = {
      userName: 'jest_user',
      email: 'jest_user@example.com',
    }
  })

  test('test case1', () => {
    expect(commonData.userName).toBe('jest_user')
  })
  test('test case2', () => {
    expect(commonData.email).toBe('jest_user@example.com')
  })
})
