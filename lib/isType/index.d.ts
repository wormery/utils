/**
 * it can check whether is a undefine type ,
 * it till you.
 *
 * 检查是不是undefine
 *
 * @param v it object to be checked.
 * @returns it is undefine will return true;
 */
export declare function isUndef(v: any): v is undefined;
/**
 * 打印typeof
 *
 * @param v
 * @returns
 */
export declare function toTypeOf(v: any): string;
/**
 * 不是undefine
 *
 * @param v 传入任何值
 * @returns 如果不是未定义返回true
 */
export declare function isNotUndef(v: any): boolean;
/**
 *  是函数
 *
 * @param v 传入任何类型
 * @returns 如果是函数返回true
 */
export declare function isFunction(v: any): v is Function;
/**
 * 是空的字符传
 *
 * @param v 字符串
 * @returns
 */
export declare function isEmpty(v: string): boolean;
/**
 * enter  any object ,
 * it can check whether  is a null type ,
 * and tell you.
 * 检查是不是null
 *
 * @param v it is an object to be checked.
 * @returns if it is null ,it will return true;
 */
export declare function isNull(v: any): v is null;
/**
 * this will check is it null or undefine ，this will return true
 *  检查是不是null和undefine
 *
 * @param v it can be anything type;
 * @returns   if it is null  or undefine ,it will return true;
 */
export declare function isUndefAndNull(v: any): v is null | undefined;
/**
 * based on coming Object,
 * return true or false.
 *
 * 检查检查是不是true,任何强转
 *
 * @param v  it is a Object to determine
 * @returns if it should return true ,it will return true.
 */
export declare function isTure(v: any): boolean;
/**
 *  值绝对等于true,没有类型转换
 *
 * @param v
 * @returns v=true return true
 */
export declare function equalToTrue(v: any): boolean;
/**
 * based on incoming Object,
 * return true or false
 *
 * 检查检查是不是false,任何强转
 *
 * @param v it is a Object to determine.
 * @returns  if it should return true ,it will return false.
 */
export declare function isFalse(v: any): boolean;
/**
 *  值绝对等于false，没有类型转换
 *
 * @param v
 * @returns v = false return true;
 */
export declare function equalToFalse(v: any): boolean;
/**
 * 是否是基础类型
 *
 *check whether is it a primitive type;
 *
 * @param v 要确定的对象
 * @returns 是基础类型则返回是 it is basic type ,ts is returned;
 */
export declare function isPrimitive(v: any): v is string | number | boolean | symbol;
/**
 * 检查是不是数组
 *
 * @param v
 * @returns 是则返回true
 */
export declare function isArray(v: any): v is any[];
/**
 *  检查是不是object
 *
 * @param v
 * @returns 是则返回true
 */
export declare function isObject(v: any): v is Object;
/**
 * if is a string type,it will return true.
 * 检查是不是string
 *
 * @param v \
 * @returns
 */
export declare function isString(x: any): x is string;
/**
 * if is a boolean type,it is return true;
 *
 * 检查是不是boolean
 *
 * @param v
 * @returns
 */
export declare function isBoolean(v: any): boolean;
/**
 * if is a symbol type,it is true
 * 检查是不是symbol
 *
 * @param v
 * @returns
 */
export declare function isSymbol(v: any): v is symbol;
/**
 * if is a number type ,it is return true;
 * 检查是不是number
 *
 * @param v
 * @returns
 */
export declare function isNumber(v: any): boolean;
/**
 * 检查是不是promise
 *
 * @param v
 * @returns
 */
export declare function isPromise(v: any): boolean;
//# sourceMappingURL=index.d.ts.map