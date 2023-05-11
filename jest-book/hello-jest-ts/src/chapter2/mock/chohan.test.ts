// jest.mock()を利用したモック化
import { chohan } from './chohan'

// jest.mockでseedモジュールのseed関数を上書き
jest.mock('./seed', () => {
  return {
    seed: jest
      .fn()
      .mockImplementationOnce(() => 2)
      .mockImplementationOnce(() => 1),
  }
})

describe('chohan', () => {
  it('returns 丁 when seed returns an even number like 2', () => {
    expect(chohan()).toBe('丁')
  })
  it('returns 半 when seed returns an odd number like 1', () => {
    expect(chohan()).toBe('半')
  })
})
