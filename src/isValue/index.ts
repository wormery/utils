/**
 * 是某个存在吗，传入那个存在
 * @param THE  那个存在
 * @returns 返回一个函数，如果向里面传入之前的那个词则返回true
 */
export function isThe<T>(THE: T) {
  return (V: any) => THE === V;
}
