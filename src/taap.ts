export type TaapType =
  | 'Array'
  | 'Object'
  | 'String'
  | 'Date'
  | 'RegExp'
  | 'Function'
  | 'Boolean'
  | 'Number'
  | 'Null'
  | 'Undefined';

export function getType(v: any) {
  return Object.prototype.toString.call(v).slice(8, -1) as TaapType;
}
/**
 * Determine if argument is an `Array`.
 *
 * ```ts
 * const maybeArray: unknown = [1];
 *
 * if (isArray(maybeArray)) {
 *   // `maybeArray` will be considered an Array
 *   maybeArray.map(x => x)
 * }
 * ```
 * Provide a specific type:
 * ```ts
 * const maybeArray: unknown = [1];
 *
 * if (isArray<number>(maybeArray)) {
 *   // `maybeArray` will be considered an Array and `x` will be considered a number
 *   maybeArray.map((x => x) // `
 * }
 * ```
 *
 * @typeParam T Accepts a type to narrow the return type.
 *
 * Default: to `any`.
 */
export function isArray<T = any>(val: any): val is Array<T> {
  return getType(val) === 'Array';
}

/**
 * Determine if argument is an `Object`.
 *
 * ```ts
 * const maybeObject: unknown = { a: true };
 *
 * if (isObject(maybeObject)) {
 *   // `maybeObject` will be considered a Record<string, any>
 *   maybeObject.someProp = true
 * }
 * ```
 * Provide a specific type:
 * ```ts
 * const maybeObject: unknown = { a: true };
 *
 * if (isObject<{a: boolean}>(maybeObject)) {
 *   // maybeObject will be typed as `{ a: boolean }`
 *   maybeObject.a === true;
 * }
 * ```
 *
 * @typeParam T Accepts a type to narrow the return type.
 */
export function isObject<T extends Record<string, any>>(val: any): val is T {
  return getType(val) === 'Object';
}

/**
 * Determine if argument is a `Function`.
 *
 * ```ts
 * const maybeFunction: unknown = (x: any) => x;
 *
 * if (isFunction(maybeFunction)) {
 *   maybeFunction.call(...args)
 * }
 * ```
 *
 * Provide a specific type:
 * ```ts
 * const maybeFunction: unknown = (x: number) => x.toString();
 *
 * if (isFunction<(x: number) => string>(maybeFunction)) {
 *   maybeFunction(42) === '42'
 * }
 * ```
 *
 * @typeParam T Accepts a type to narrow the return type.
 */
export function isFunction<T = () => {}>(val: any): val is T {
  return getType(val) === 'Function';
}

/**
 * Determine if argument is a `string`.
 *
 * ```ts
 * const maybeString: unknown = 'ta,ap';
 *
 * if (isString(maybeString)) {
 *   maybeString.split(',').join('') === 'taap'
 * }
 * ```
 */
export function isString(val: any): val is string {
  return getType(val) === 'String';
}

/**
 * Determine if argument is a `Date`.
 *
 * ```ts
 * const maybeDate: unknown = new Date('August 19, 1975 23:15:30');
 *
 * if (isDate(maybeDate)) {
 *   maybeDate.setFullYear(1969);
 * }
 * ```
 */
export function isDate(val: any): val is Date {
  return getType(val) === 'Date';
}

/**
 * Determine if argument is a `RegEx`.
 *
 * ```ts
 * const maybeRegExp: unknown = /\w+\s/g;
 *
 * if (isRegExp(maybeRegExp)) {
 *   const str = 'fee fi fo fum';
 *   maybeRegExp.test('fee fi fo fum') === true
 * }
 * ```
 */
export function isRegExp(val: any): val is RegExp {
  return getType(val) === 'RegExp';
}

/**
 * Determine if argument is a `boolean`.
 *
 * ```ts
 * const maybeBoolean: unknown = true;
 *
 * if (isBoolean(maybeBoolean)) {
 *   maybeBoolean === true
 * }
 * ```
 */
export function isBoolean(val: any): val is boolean {
  return getType(val) === 'Boolean';
}

/**
 * Determine if argument is a `number`.
 *
 * ```ts
 * const maybeNumber: unknown = 1;
 *
 * if (isNumber(maybeNumber)) {
 *   maybeNumber + 2 === 3;
 * }
 * ```
 */
export function isNumber(val: any): val is number {
  return getType(val) === 'Number';
}

/**
 * Determine if argument is `null`.
 *
 * ```ts
 * const maybeNull: unknown = 1;
 *
 * if (isNumber(maybeNull)) {
 *   maybeNull === null;
 * }
 */
export function isNull(val: any): val is null {
  return getType(val) === 'Null';
}

/**
 * Determine if argument is `undefined`.
 *
 * ```ts
 * const maybeUndefined: unknown = 1;
 *
 * if (isNumber(maybeUndefined)) {
 *   maybeUndefined === undefined;
 * }
 */
export function isUndefined(val: any): val is undefined {
  return getType(val) === 'Undefined';
}
