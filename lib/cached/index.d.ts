/**
 * 缓存方法，传入一个函数，要求传入的函数的第一个参数为一个str，用作key
 * 返回一个函数，调用函数，你可以向内传入值来调用以前缓存的内容，第一个值为缓存值的key
 *
 * 缓存是在内存中的，根据场合使用
 *
 * 请不要滥用！！！
 * 会持续占用内存
 *
 * @param handle  处理函数
 * @returns 返回一个函数
 */
export declare function cached<A extends any[], R>(handle: (str: string, ...rest: A) => R): (str: string, ...rest: A) => R;
/**
 * 每一次缓存时都给予选项是否懒加载，定义传入的高级函数时，
 * 请在最后一个设置为布尔便可
 *
 * 传入一个(...args:any[],isCached:boolean)=>{}
 *
 * @param fun  (str: string, ...rest: A ,isCached:boolean) => R
 * ...rest  ...args:any[],isCached:boolean
 * @returns R
 */
export declare function selectCached<A extends any[], R>(fun: (str: string, ...rest: A) => R): (str: string, ...rest: A) => R;
//# sourceMappingURL=index.d.ts.map