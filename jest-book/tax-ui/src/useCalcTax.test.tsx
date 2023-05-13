import { act, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/lib/node'

import { renderHook, waitForRequest } from './test-utils'
import { useCalcTax } from './useCalcTax'

// mswの初期化、クリーンアップ
const server = setupServer()
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  server.events.removeAllListeners()
})
afterAll(() => server.close())

// mswのリクエストをキャプチャする関数
const waitForCalcTaxRequest = () => {
  return waitForRequest(server, 'POST', 'http://localhost:3000/calc-tax')
}

describe('useCalcTax', () => {
  test('所得税計算APIを呼び出せる', async () => {
    // APIハンドラをモック
    server.use(
      rest.post('http://localhost:3000/calc-tax', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ tax: 15315 }))
      }),
    )

    // これから呼び出されるAPIリクエストをキャプチャ
    const pendingRequest = waitForCalcTaxRequest()

    // フックをレンダリング
    const { result } = renderHook(() => useCalcTax())

    // フックから返されたmutate関数を使用してAPI呼び出し
    act(() => {
      result.current.mutate({
        yearsOfService: 6,
        isOfficer: false,
        isDisability: false,
        severancePay: 3_000_000,
      })
    })

    // フックの結果が成功になるまで待つ
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    // APIレスポンス内容の確認
    expect(result.current.data?.status).toBe(200)
    expect(await result.current.data?.json()).toStrictEqual({ tax: 15315 })

    // キャプチャしたAPIリクエスト内容の確認
    const request = await pendingRequest
    expect(await request.json()).toStrictEqual({
      yearsOfService: 6,
      isOfficer: false,
      isDisability: false,
      severancePay: 3_000_000,
    })
  })

  test('所得税計算APIがBad Requestを返す場合', async () => {
    server.use(
      rest.post('http://localhost:3000/calc-tax', async (req, res, ctx) => {
        // 400 (Bad Request)を返す
        return res(ctx.status(400), ctx.json({ message: 'Invalid parameter.' }))
      }),
    )

    const { result } = renderHook(() => useCalcTax())

    act(() => {
      result.current.mutate({
        yearsOfService: 6,
        isDisability: false,
        isOfficer: false,
        severancePay: 3_000_000,
      })
    })

    // MEMO:TanStack QueryはStatusCode:400をエラーとはみなさない
    // https://tkdodo.eu/blog/react-query-fa-qs#why-do-i-not-get-errors-
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.isError).toBe(false)
    expect(result.current.data?.status).toBe(400)
    expect(await result.current.data?.json()).toStrictEqual({
      message: 'Invalid parameter.',
    })
  })
})
