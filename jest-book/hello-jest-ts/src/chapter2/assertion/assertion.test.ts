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