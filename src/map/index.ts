/**
 * 公共的生成是不是某集合类型
 *
 * 传入一个字符串比如"1,2,3,4"
 * 它会返回一个函数，您向返回的函数传入以
 * 上逗号间的任何值之一，它都将返回true，
 *
 * 这个函数会自动缓存到内存中，请根据场合使用
 *
 * @param mapString 传入 "1,2,3,4"
 * @returns 输出一个函数，
 */
export function makeMap(mapString: string): (v: any) => boolean {
  const arr = mapString.split(',')

  const map: any = Object.create(null)

  for (let i = 0; i < map.length; i++) {
    map[arr[i]] = true
  }

  return (v: any) => Boolean(v) && Boolean(map[v.toLocaleLowerCase()])
}
