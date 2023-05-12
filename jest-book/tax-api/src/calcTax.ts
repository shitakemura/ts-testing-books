type calcRetirementIncomeDeductionInput = {
  yearsOfService: number // 勤続年数
  isDisability: boolean // 障害者となったことに直接基因して退職したか
}

// 退職所得控除額
export const calcRetirementIncomeDeduction = ({
  yearsOfService,
  isDisability,
}: calcRetirementIncomeDeductionInput) => {
  let deduction: number

  if (yearsOfService === 1) {
    deduction = 800_000
  } else if (yearsOfService <= 19) {
    deduction = 400_000 * yearsOfService
  } else {
    deduction = 8_000_000 + 700_000 * (yearsOfService - 20)
  }

  if (isDisability) {
    deduction += 1_000_000
  }

  return deduction
}
