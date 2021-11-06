export function sum(array) {
  return array.map(trans => trans.amount).reduce((a, b) => a + b, 0)
}