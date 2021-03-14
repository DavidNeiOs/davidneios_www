export function groupArrayToObj(arr: any[]): any {
  return arr.reduce((acc, curr) => {
    acc[curr.fieldValue] = curr.nodes
    return acc }
  , {})
}