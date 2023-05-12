#### TODO リスト

- 退職金の所得税計算関数を実装

  - 退職所得控除額の計算: calcRetirementIncomeDeduction
    - 仕様
      - 20 年以下: 40 万円 x 勤続年数
      - 20 年超: 800 万円 + 70 万円 x (勤続年数 - 20 年)
      - 障害者となったことに直接基因して退職した場合は、上記の金額に 100 万円を加算
    - 引数
      - 勤続年数
      - 障害者となったことに直接基因して退職したか
    - 戻り値
      - 退職所得控除額
  - 課税退職所得金額の計算: calcTaxableRetirementIncome
  - 基準所得税額の計算: calcIncomeTaxBase
  - 所得税の源泉徴収税額の計算: calcTaxWithheld

- 退職金の所得税計算 API ハンドラを実装
