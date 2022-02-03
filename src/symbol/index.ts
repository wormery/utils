/**
 * 将symboltostring 然后去掉Symbol()拿到括号里面的东西
 *
 * @param symbol
 * @returns symbol()里面的东西
 */
export function getSymbolVal(symbol: symbol): string {
  const str = symbol.toString()
  return str.slice(7, str.length - 1)
}
