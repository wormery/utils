import { hasProp } from 'src'

/**
 * it can check whether is a undefine type ,
 * it till you.
 *
 * 检查是不是undefine
 *
 * @param v it object to be checked.
 * @returns it is undefine will return true;
 */
export function isUndef(v: unknown): v is undefined {
  return v === undefined
}

/**
 * 打印typeof
 *
 * @param v
 * @returns
 */
export function toTypeOf(v: unknown): string {
  return typeof v
}

/**
 * 不是undefine
 *
 * @param v 传入任何值
 * @returns 如果不是未定义返回true
 */
export function isNotUndef(v: unknown): boolean {
  return !isUndef(v)
}

/**
 *  是函数
 *
 * @param v 传入任何类型
 * @returns 如果是函数返回true
 */
export function isFunction(v: unknown): v is Function {
  return typeof v === 'function'
}

/**
 * 是空的字符传
 *
 * @param v 字符串
 * @returns
 */
export function isEmpty(v: string): boolean {
  return isObject(v) && hasProp(v, 'length') && v.length === 0
}

/**
 * enter  any object ,
 * it can check whether  is a null type ,
 * and tell you.
 * 检查是不是null
 *
 * @param v it is an object to be checked.
 * @returns if it is null ,it will return true;
 */
export function isNull(v: unknown): v is null {
  return v === null
}

/**
 * this will check is it null or undefine ，this will return true
 *  检查是不是null和undefine
 *
 * @param v it can be anything type;
 * @returns   if it is null  or undefine ,it will return true;
 */
export function isUndefAndNull(v: unknown): v is null | undefined {
  return isNull(v) || isUndef(v)
}

/**
 * based on coming Object,
 * return true or false.
 *
 * 检查检查是不是true,任何强转
 *
 * @param v  it is a Object to determine
 * @returns if it should return true ,it will return true.
 */
export function isTure(v: unknown): boolean {
  return Boolean(v)
}

/**
 *  值绝对等于true,没有类型转换
 *
 * @param v
 * @returns v=true return true
 */
export function equalToTrue(v: unknown): boolean {
  return v === true
}

/**
 * based on incoming Object,
 * return true or false
 *
 * 检查检查是不是false,任何强转
 *
 * @param v it is a Object to determine.
 * @returns  if it should return true ,it will return false.
 */
export function isFalse(v: unknown): boolean {
  return !v
}

/**
 *  值绝对等于false，没有类型转换
 *
 * @param v
 * @returns v = false return true;
 */
export function equalToFalse(v: unknown): boolean {
  return v === false
}

/**
 * 是否是基础类型
 *
 *check whether is it a primitive type;
 *
 * @param v 要确定的对象
 * @returns 是基础类型则返回是 it is basic type ,ts is returned;
 */
export function isPrimitive(
  v: unknown
): v is string | number | boolean | symbol {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'boolean' ||
    typeof v === 'symbol'
  )
}

/**
 * 检查是不是数组
 *
 * @param v
 * @returns 是则返回true
 */
export function isArray(v: unknown): v is unknown[] {
  return Array.isArray(v)
}

/**
 *  检查是不是object
 *
 * @param v
 * @returns 是则返回true
 */
export function isObject(v: unknown): v is Object {
  return v !== null && typeof v === 'object'
}

/**
 * if is a string type,it will return true.
 * 检查是不是string
 *
 * @param v \
 * @returns
 */
export function isString(x: unknown): x is string {
  return typeof x === 'string'
}

/**
 * if is a boolean type,it is return true;
 *
 * 检查是不是boolean
 *
 * @param v
 * @returns
 */
export function isBoolean(v: unknown): v is boolean {
  return typeof v === 'boolean'
}

/**
 * if is a symbol type,it is true
 * 检查是不是symbol
 *
 * @param v
 * @returns
 */
export function isSymbol(v: unknown): v is symbol {
  return typeof v === 'symbol'
}
/**
 * if is a number type ,it is return true;
 * 检查是不是number
 *
 * @param v
 * @returns
 */
export function isNumber(v: unknown): v is number {
  return typeof v === 'number'
}

/**
 * 检查是不是promise
 *
 * @param v
 * @returns
 */
export function isPromise(v: any): v is Promise<unknown> {
  return (
    v instanceof Promise || (v.then === 'function' && v.catch === 'function')
  )
}
