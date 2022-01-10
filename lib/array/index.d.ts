/**
 * 删除数组
 *
 * @param arr 数组
 * @param item 将要删除的元素
 * @returns 返回-2代表数组长度为零，如果-1代表未找到，大于等于零是删除的元素下标
 */
export declare function remove(arr: Array<any>, item: any): number;
/**
 * 合并数组
 *
 * @param array 将要被插入的数组
 * @param index 插入的位置
 * @param rest 任意数量的数组
 * @returns 返回新数组
 */
export declare function mergeArray<T>(array: T[], index: number, ...rest: T[][]): T[];
/**
 * 数组去重
 *
 * @param arr 数组
 * @returns 无重复的数组
 */
export declare function unique<E extends any[]>(arr: E): any[];
//# sourceMappingURL=index.d.ts.map