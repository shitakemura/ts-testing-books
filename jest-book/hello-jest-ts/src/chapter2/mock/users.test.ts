// 外部モジュールをモック化
import axios from 'axios'
import Users from './users'

// axiosをモック化
jest.mock('axios')

test('should fetch all users', async () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }

  // axiosのget関数を上書き
  ;(
    axios as jest.Mocked<typeof axios>
  ).get.mockResolvedValue(resp)
  //   ;(axios as jest.Mocked<typeof axios>).get.mockImplementation(() => Promise.resolve(resp))

  await expect(Users.search()).resolves.toEqual(users)
})
