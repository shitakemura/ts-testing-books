- PORT=3001 npm run start

#### TODO リスト

- 見た目を実装
  - [OK] 入力フォームコンポーネント
  - [OK] 結果表示コンポーネント
  - [OK] ページコンポーネント
- 振る舞いを実装
  - [OK] 所得税計算 API フックを作成
  - [OK] 画面からフックを利用
  - [OK] フォームバリデーションを実装
- [OK] 計算状態の判断に null を使うべきか => tax プロパティの型から null を取り除く
- [OK] 200-299 以外のステータスコードをフック側で失敗扱いにする？
- 計算状態に対応する
  - [OK] 計算状態を定義して、計算状態ごとの Story を用意する
  - [OK] 入力フォームコンポーネント: 計算中はボタンを非活性にする
  - [OK] 結果表示コンポーネント: 計算状態に合わせて表示を切り替える
  - [OK] ページコンポーネント: 計算状態を管理する
