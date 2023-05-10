test('testを利用してテストケースを作成する', () => {
  const result = true
  const expected = true
  expect(result).toBe(expected)
})

it('itを利用してテストケースを作成する', () => {
  expect(true).toBe(true)
})

// プリミティブな値の評価

const numberValue = 0
const stringValue = '文字列'
const booleanValue = true

test('evaluates as equal for all the same primitive values when using the toBe function', () => {
  expect(numberValue).toBe(0)
  expect(stringValue).toBe('文字列')
  expect(booleanValue).toBe(true)
})

test('evaluates as equal for all the same primitive values when using the toEqual function', () => {
  expect(numberValue).toEqual(0)
  expect(stringValue).toEqual('文字列')
  expect(booleanValue).toEqual(true)
})

test('evaluates as equal for all the same primitive values when using the toStrictEqual function', () => {
  expect(numberValue).toStrictEqual(0)
  expect(stringValue).toStrictEqual('文字列')
  expect(booleanValue).toStrictEqual(true)
})

// オブジェクトの評価

type CanType = {
  flavor: string
  ounces: number
}

const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can3: CanType = can2

class Can {
  flavor: string
  ounces: number

  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor
    this.ounces = ounces
  }
}

const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
})

// toBe
test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2)
})

test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3)
})

// toEqual
test('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2)
})

test('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4)
})

// toStrictEqual
test('can2 and can4 are different class', () => {
  expect(can2).not.toStrictEqual(can4)
})

test('difference between toEqual and toStrictEqual', () => {
  // toEqual ignores undefined
  expect({ foo: NaN, bar: undefined }).toEqual({
    foo: NaN,
  })

  expect({ foo: NaN, bar: undefined }).not.toStrictEqual({
    foo: NaN,
  })

  expect([, undefined, 1]).toEqual([undefined, , 1])

  expect([, undefined, 1]).not.toStrictEqual([
    undefined,
    ,
    1,
  ])
})

// 真偽値の評価
test('"0" should be Truthy', () => {
  expect('0').toBeTruthy()
})

test('0 should be Falsy', () => {
  expect(0).toBeFalsy()
})

// null, undefinedの評価
test('should be null', () => {
  expect(null).toBe(null)
  expect(null).toBeNull()
})

test('should be undefined', () => {
  expect(undefined).toBe(undefined)
  expect(undefined).toBeUndefined()
})

test('should be null or undefined', () => {
  let a // undefined
  expect(a == null).toBe(true)
  a = null // null
  expect(a == null).toBe(true)
})

// 曖昧な結果の評価
const hoge = () => ({ hoge: 'hogehoge', number: 0 })

test('hoge return anything', () => {
  // not null and not undefined
  expect(hoge()).toEqual(expect.anything())

  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.anything(),
  })

  expect(hoge()).toEqual({
    hoge: expect.any(String),
    number: expect.any(Number),
  })
})

// 数値の評価
test('0.1 + 0.2 returns 0.3', () => {
  expect(0.1 + 0.2).not.toBe(0.3)
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

// 数値の比較
test('compare number', () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3)
  expect(0.1 + 0.2 > 0.3).toBe(true)

  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3)
  expect(0.1 + 0.2).toBeLessThan(0.4)
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.4)
})
