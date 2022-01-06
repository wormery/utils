/**
 * 删除数组
 *
 * @param arr 数组
 * @param item 将要删除的元素
 * @returns 返回-2代表数组长度为零，如果-1代表未找到，大于等于零是删除的元素下标
 */
export function remove(arr: Array<any>, item: any): number {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      if (arr.splice(index, 1).length > 0) {
        return index;
      }
    }
    return index;
  }
  return -2;
}

/**
 * 合并数组
 *
 * @param array 将要被插入的数组
 * @param index 插入的位置
 * @param rest 任意数量的数组
 * @returns 返回新数组
 */
export function mergeArray<T>(array: T[], index: number, ...rest: T[][]) {
  let newArr = [];
  let p1 = 0;
  for (; p1 < index; p1++) {
    newArr.push(array[p1]);
  }
  for (const restarr of rest) {
    for (const item of restarr) {
      newArr.push(item);
    }
  }
  for (let i = p1; i < array.length; i++) {
    const item = array[i];
    newArr.push(item);
  }
  return newArr;
}

/**
 * 数组去重
 *
 * @param arr 数组
 * @returns 无重复的数组
 */
export function unique<E extends any[]>(arr: E) {
  return Array.from(new Set(arr));
}
