type calcRetirementIncomeDeductionInput = {
  yearsOfService: number // 勤続年数
  isDisability: boolean // 障害者となったことに直接基因して退職したか
}

// 退職所得控除額
export const calcRetirementIncomeDeduction = (
  input: calcRetirementIncomeDeductionInput,
) => {
  return 800_000
}
