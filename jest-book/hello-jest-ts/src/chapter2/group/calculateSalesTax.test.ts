const calculateSalesTax = (price: number) =>
  price > 0 ? Math.floor((price / 100) * 10) : 0

describe('calculateSalesTax with Parameterized Tests', () => {
  test.each([
    { price: 100, expected: 10 },
    { price: 99, expected: 9 },
    { price: 1, expected: 0 },
    { price: 0.1, expected: 0 },
    { price: 0, expected: 0 },
    { price: -1, expected: 0 },
  ])(
    `calculates the sales tax for a price equal to $price`,
    ({ price, expected }) => {
      expect(calculateSalesTax(price)).toBe(expected)
    }
  )
})
