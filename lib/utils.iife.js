(function (exports) {
  'use strict';

  /**
   * it can check whether is a undefine type ,
   * it till you.
   *
   * 检查是不是undefine
   *
   * @param v it object to be checked.
   * @returns it is undefine will return true;
   */
  function isUndef(v) {
      return v === undefined;
  }
  /**
   * 打印typeof
   *
   * @param v
   * @returns
   */
  function toTypeOf(v) {
      return typeof v;
  }
  /**
   * 不是undefine
   *
   * @param v 传入任何值
   * @returns 如果不是未定义返回true
   */
  function isNotUndef(v) {
      return !isUndef(v);
  }
  /**
   *  是函数
   *
   * @param v 传入任何类型
   * @returns 如果是函数返回true
   */
  function isFunction(v) {
      return typeof v === 'function';
  }
  /**
   * 是空的字符传
   *
   * @param v 字符串
   * @returns
   */
  function isEmpty(v) {
      return v.length === 0;
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
  function isNull(v) {
      return v === null;
  }
  /**
   * this will check is it null or undefine ，this will return true
   *  检查是不是null和undefine
   *
   * @param v it can be anything type;
   * @returns   if it is null  or undefine ,it will return true;
   */
  function isUndefAndNull(v) {
      return isNull(v) || isUndef(v);
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
  function isTure(v) {
      return Boolean(v);
  }
  /**
   *  值绝对等于true,没有类型转换
   *
   * @param v
   * @returns v=true return true
   */
  function equalToTrue(v) {
      return v === true;
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
  function isFalse(v) {
      return !v;
  }
  /**
   *  值绝对等于false，没有类型转换
   *
   * @param v
   * @returns v = false return true;
   */
  function equalToFalse(v) {
      return v === false;
  }
  /**
   * 是否是基础类型
   *
   *check whether is it a primitive type;
   *
   * @param v 要确定的对象
   * @returns 是基础类型则返回是 it is basic type ,ts is returned;
   */
  function isPrimitive(v) {
      return (typeof v === 'string' ||
          typeof v === 'number' ||
          typeof v === 'boolean' ||
          typeof v === 'symbol');
  }
  /**
   * 检查是不是数组
   *
   * @param v
   * @returns 是则返回true
   */
  function isArray(v) {
      return Array.isArray(v);
  }
  /**
   *  检查是不是object
   *
   * @param v
   * @returns 是则返回true
   */
  function isObject(v) {
      return v !== null && typeof v === 'object';
  }
  /**
   * if is a string type,it will return true.
   * 检查是不是string
   *
   * @param v \
   * @returns
   */
  function isString(x) {
      return typeof x === 'string';
  }
  /**
   * if is a boolean type,it is return true;
   *
   * 检查是不是boolean
   *
   * @param v
   * @returns
   */
  function isBoolean(v) {
      return typeof v === 'boolean';
  }
  /**
   * if is a symbol type,it is true
   * 检查是不是symbol
   *
   * @param v
   * @returns
   */
  function isSymbol(v) {
      return typeof v === 'symbol';
  }
  /**
   * if is a number type ,it is return true;
   * 检查是不是number
   *
   * @param v
   * @returns
   */
  function isNumber(v) {
      return typeof v === 'number';
  }
  /**
   * 检查是不是promise
   *
   * @param v
   * @returns
   */
  function isPromise(v) {
      return (v instanceof Promise || (v.then === 'function' && v.catch === 'function'));
  }

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
  function cached(handle) {
      const cache = Object.create(null);
      const cachecd = function (str, ...rest) {
          const obj = cache[str];
          return isNotUndef(obj) ? obj : (cache[str] = handle(str, ...rest));
      };
      return cachecd;
  }
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
  function selectCached(fun) {
      const cacheds = cached(fun);
      return (str, ...rest) => {
          if (equalToFalse(rest[rest.length - 1])) {
              return fun(str, ...rest);
          }
          else {
              return cacheds(str, ...rest);
          }
      };
  }

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
  function makeMap(mapString) {
      const arr = mapString.split(',');
      const map = Object.create(null);
      for (let i = 0; i < map.length; i++) {
          map[arr[i]] = true;
      }
      return (v) => Boolean(v) && Boolean(map[v.toLocaleLowerCase()]);
  }

  const hasOwnProperty = Object.prototype.hasOwnProperty;
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
  function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
  }
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
  function hasProp(obj, key) {
      return !!obj && !isUndef(obj[key]);
  }

  /**
   * 是某个存在吗，传入那个存在
   * @param THE  那个存在
   * @returns 返回一个函数，如果向里面传入之前的那个词则返回true
   */
  function isThe(THE) {
      return (V) => THE === V;
  }

  /**
   * 删除数组
   *
   * @param arr 数组
   * @param item 将要删除的元素
   * @returns 返回-2代表数组长度为零，如果-1代表未找到，大于等于零是删除的元素下标
   */
  function remove(arr, item) {
      if (arr.length > 0) {
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
  function mergeArray(array, index, ...rest) {
      const newArr = [];
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
  function unique(arr) {
      return Array.from(new Set(arr));
  }

  /**
   * 让自执行函数懒加载
   *
   * 懒函数也不要滥用！！！
   *
   * @param fun 要懒加载的自执行函数
   * @param rest1 要懒加载的自执行函数的参数
   * @returns 返回一个函数，执行后初始化，加第一次调用一起执行
   */
  function lazyFun(fun, ...rest1) {
      // 存储传入的高级函数返回的函数， 你是不是晕了，我写的时候也把自己绕进去了
      let rf = (...rest2) => (rf = fun(...rest1))(...rest2);
      // 这里目前简化不了只能返回高级函数， 是无法直接返回我们传入的高级函数里面返回的高级函数的，
      // 因为使用者已经将其放到了变量里，我们改不了他的变量,只能套一层改自己的了变量了
      return (...rest2) => rf(...rest2);
  }
  /**
   * 给函数绑定新指定的this，并返回一个新的函数
   * @param _this
   * @param fn
   * @returns  新的函数
   */
  function polyfillBind(_this, fn) {
      const boundFn = function (...rest) {
          return fn.apply(_this, rest);
      };
      return boundFn;
  }
  /**
   *  修改函数的this环境
   *
   * @param _this 传入你想要让成为的this
   * @param fun 传入你要运行的函数
   * @param rest 函数的参数
   */
  function call(_this, fun, ...rest) {
      // 使用symbol可以避免产生重复
      const temp = Symbol('temp');
      _this[temp] = fun;
      const ret = _this[temp](...rest);
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete _this[temp];
      return ret;
  }

  /**
   * 将symboltostring 然后去掉Symbol()拿到括号里面的东西
   *
   * @param symbol
   * @returns symbol()里面的东西
   */
  function getSymbolVal(symbol) {
      const str = symbol.toString();
      return str.slice(7, str.length - 1);
  }

  /**
   * 转换为骆驼命名法
   */
  const camelize = lazyFun(selectCached, (str) => {
      /**
       * 找到以横线开头的ring|symbol
       * 括号里进行分组
       * 括号里的是第一组
       * 第一组应该是-
       */
      const camelizeRE = /-(\w)/g;
      return str.replace(camelizeRE, (_, r) => r.toUpperCase());
  });
  /**
   * 首字母大写
   */
  const capitalize = lazyFun(selectCached, (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * 驼峰命名转横线命名法
   */
  const hypnenate = lazyFun(selectCached, (str, isCached = true) => {
      /**
       * 大写字母
       */
      const hypnenateRE = /([A-Z])/;
      return str
          .replace(hypnenateRE, (r) => {
          return `-${r}`;
      })
          .toLowerCase();
  });

  exports.cached = cached;
  exports.call = call;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.equalToFalse = equalToFalse;
  exports.equalToTrue = equalToTrue;
  exports.getSymbolVal = getSymbolVal;
  exports.hasOwn = hasOwn;
  exports.hasProp = hasProp;
  exports.hypnenate = hypnenate;
  exports.isArray = isArray;
  exports.isBoolean = isBoolean;
  exports.isEmpty = isEmpty;
  exports.isFalse = isFalse;
  exports.isFunction = isFunction;
  exports.isNotUndef = isNotUndef;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isPrimitive = isPrimitive;
  exports.isPromise = isPromise;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isThe = isThe;
  exports.isTure = isTure;
  exports.isUndef = isUndef;
  exports.isUndefAndNull = isUndefAndNull;
  exports.lazyFun = lazyFun;
  exports.makeMap = makeMap;
  exports.mergeArray = mergeArray;
  exports.polyfillBind = polyfillBind;
  exports.remove = remove;
  exports.selectCached = selectCached;
  exports.toTypeOf = toTypeOf;
  exports.unique = unique;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
