import { useMutation } from '@tanstack/react-query'

const calcTaxUrl = `http://localhost:3000/calc-tax`

export type CalcTaxParam = {
  yearsOfService: number
  isDisability: boolean
  isOfficer: boolean
  severancePay: number
}

export type CalcTaxResult = {
  tax: number
}

export const useCalcTax = () => {
  return useMutation((param: CalcTaxParam) => {
    return fetch(calcTaxUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
  })
}
