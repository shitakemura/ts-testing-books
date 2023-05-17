## unittest

- 03: はじめの単体テスト

  - 02: テストの構成要素
  - 04: 条件分岐
  - 05: 閾値と例外処理
  - 06: 用途別のマッチャー
  - 07: 非同期処理のテスト

- 04: モック

  - 02: モックモジュールを使ったスタブ
  - 03: Web API のモック基礎
  - 04: Web API のモック生成関数
  - 05: モック関数を使ったスパイ
  - 06: Web API の詳細なモック
  - 07: 現在時刻に依存したテスト

- 05: UI コンポーネントテスト

  - 03: はじめての UI コンポーネントテスト
  - 04: アイテム一覧 UI コンポーネントテスト
  - 05: インタラクティブな UI コンポーネントテスト
  - 06: ユーティリティ関数を使用したテスト
  - 07: 非同期処理を含む UI コンポーネントテスト
  - 08: UI コンポーネントの Snapshot テスト
    - npx jest --updateSnapshot

#### setup

- npm init -y
- npm install -D typescript
- npx tsc --init
- npm install -D jest ts-jest @types/jest
- npx ts-jest config:init

- npm install react react-dom
- npm install -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
