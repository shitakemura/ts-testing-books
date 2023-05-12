import { calcRetirementIncomeDeduction } from './calcTax'

test('退職所得控除額', () => {
  const deduction = calcRetirementIncomeDeduction({
    yearsOfService: 2, // 勤続年数
    isDisability: false, // 障害者となったことに直接基因して退職したか
  })

  expect(deduction).toBe(800_000) // 2年 x 40万円
})
