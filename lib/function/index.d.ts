/**
 * 让自执行函数懒加载
 *
 * 懒函数也不要滥用！！！
 *
 * @param fun 要懒加载的自执行函数
 * @param rest1 要懒加载的自执行函数的参数
 * @returns 返回一个函数，执行后初始化，加第一次调用一起执行
 */
export declare function lazyFun<A1 extends any[], A2 extends any[], R>(fun: (...rest: A1) => (...rest: A2) => R, ...rest1: A1): (...rest2: A2) => any;
/**
 * 给函数绑定新指定的this，并返回一个新的函数
 * @param _this
 * @param fn
 * @returns  新的函数
 */
export declare function polyfillBind<F extends {
    (...rest: any): any;
}>(_this: Object, fn: F): F;
/**
 *  修改函数的this环境
 *
 * @param _this 传入你想要让成为的this
 * @param fun 传入你要运行的函数
 * @param rest 函数的参数
 */
export declare function call<A extends any[], R, THIS>(_this: THIS, fun: (...rest: A) => R, ...rest: A): any;
//# sourceMappingURL=index.d.ts.map