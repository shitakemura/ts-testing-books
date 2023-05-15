export class HTTPError extends Error {}
export class RangeError extends Error {}

function checkRange(value: number) {
  if (value < 0 || value > 100) {
    throw new RangeError("入力値は0~100の間で入力してください");
  }
}

export function add(a: number, b: number) {
  //   if (a < 0 || a > 100) {
  //     throw new Error("入力値は0~100の間で入力してください");
  //   }
  //   if (b < 0 || b > 100) {
  //     throw new Error("入力値は0~100の間で入力してください");
  //   }
  checkRange(a);
  checkRange(b);

  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  checkRange(a);
  checkRange(b);

  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}
