import { TypeEqual, TypeOr } from "..";
/**
 * 检查自有属性，必须是自己有的才会检查到
 * 并给予断言类型，如果您传入的key类型是string
 * 或其他几个基本类型，则不会启动断言，需要您手动
 * 断言它的类型
 *
 *
 * @param obj 传入一个object
 * @param key 您可以传入一个key，如果可以建议别用变量，否则断言类型可能会失效，或者升明一个类型和您key一样的字符串变量，如果不知道将要断定的类型那没有办法断言，只能用 （obj as any）来调用
 * @returns 返回true或false
 */
export declare function hasOwn<O extends Object, K extends symbol | string | number>(obj: O, key: K): obj is IsHasType<O, K>;
/**
 * 查看有没有某属性有的话就在类型上添加此属性代表的类型
 * ，但是由于不知道此属性的值是什么类型所以默认给了any
 *
 * 这个属性会检查所有属性包括原型链上是否有此属性
 *
 * @param obj 要检查的对象
 * @param key  要检查的属性，注意如果输入变量将可能消除类型判断，所以我们就对于异常返回依然返回原类型（获取不到你变量里可能存在的类型）
 * @returns 如果为true 类型将包含输入的key的类型
 */
export declare function hasProp<O extends Object, K extends symbol | string | number>(obj: O, key: K): obj is IsHasType<O, K>;
/**
 * 如果等于string | symbol| number之一就认为是不合理返回，将返回类型O
 */
declare type IsHasType<O, K extends symbol | string | number> = TypeOr<TypeOr<TypeEqual<K, string>, TypeEqual<K, symbol>>, TypeEqual<K, number>> extends true ? O : O & {
    [key in K]: any;
};
export {};
//# sourceMappingURL=index.d.ts.map