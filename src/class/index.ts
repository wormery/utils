/**
 * 创建一个newclass的函数
 *
 * @author meke
 * @export
 * @template A
 * @template R
 * @param {new (...rest: A) => R} Con
 * @return {*}  {(...rest: A) => R}
 */
export function genNewClassFun<A extends any[], R>(
  Con: new (...rest: A) => R
): (...rest: A) => R {
  return (...rest: A) => {
    return new Con(...rest)
  }
}

/**
 * new一个class
 *
 * @author meke
 * @export
 * @template A
 * @template R
 * @param {new (...rest: A) => R} Con
 * @param {...A} rest
 * @return {*}  {R}
 */
export function newC<A extends any[], R>(
  Con: new (...rest: A) => R,
  ...rest: A
): R {
  return new Con(...rest)
}
