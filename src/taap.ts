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
 * Accepts a generic type predicate `isArray<string>(...): string[]`
 *
 * @param val
 * @returns boolean
 */
export function isArray<T = any>(val: any): val is Array<T> {
  return getType(val) === 'Array';
}

/**
 * Determine if argument is an `Object`.
 *
 * Accepts a generic type predicate `isObject<Record<string, number>(...): Record<string, number`
 *
 * @param val
 * @returns boolean
 */
export function isObject<T extends Record<string, any>>(val: any): val is T {
  return getType(val) === 'Object';
}

/**
 * Determine if argument is a `string`.
 *
 * @param val
 * @returns boolean
 */
export function isString(val: any): val is string {
  return getType(val) === 'String';
}

/**
 * Determine if argument is a `Date`.
 *
 * @param val
 * @returns boolean
 */
export function isDate(val: any): val is Date {
  return getType(val) === 'Date';
}

/**
 * Determine if argument is a `RegEx`.
 *
 * @param val
 * @returns boolean
 */
export function isRegExp(val: any): val is RegExp {
  return getType(val) === 'RegExp';
}

/**
 * Determine if argument is a `Function`.
 *
 * @param val
 * @returns boolean
 */
export function isFunction<T = () => {}>(val: any): val is T {
  return getType(val) === 'Function';
}

/**
 * Determine if argument is a `boolean`.
 *
 * @param val
 * @returns boolean
 */
export function isBoolean(val: any): val is boolean {
  return getType(val) === 'Boolean';
}

/**
 * Determine if argument is a `number`.
 *
 * @param val
 * @returns boolean
 */
export function isNumber(val: any): val is number {
  return getType(val) === 'Number';
}

/**
 * Determine if argument is `null`.
 *
 * @param val
 * @returns boolean
 */
export function isNull(val: any): val is null {
  return getType(val) === 'Null';
}

/**
 * Determine if argument is `undefined`.
 *
 * @param val
 * @returns boolean
 */
export function isUndefined(val: any): val is undefined {
  return getType(val) === 'Undefined';
}
