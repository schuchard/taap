// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export function callToString(v: any) {
  return Object.prototype.toString.call(v).slice(8, -1);
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
  return callToString(val) === 'Array';
}

/**
 * Determine if argument is an `Object`.
 *
 * Accepts a generic type predicate `isObject<Record<string, number>(...): Record<string, number`
 *
 * @param val
 * @returns boolean
 */
export function isObject<T = Record<string, any>>(val: any): val is T {
  return callToString(val) === 'Object';
}

/**
 * Determine if argument is a `string`.
 *
 * @param val
 * @returns boolean
 */
export function isString(val: any): val is string {
  return callToString(val) === 'String';
}

/**
 * Determine if argument is a `Date`.
 *
 * @param val
 * @returns boolean
 */
export function isDate(val: any): val is Date {
  return callToString(val) === 'Date';
}

/**
 * Determine if argument is a `RegEx`.
 *
 * @param val
 * @returns boolean
 */
export function isRegExp(val: any): val is RegExp {
  return callToString(val) === 'RegExp';
}

/**
 * Determine if argument is a `Function`.
 *
 * @param val
 * @returns boolean
 */
export function isFunction<T = () => {}>(val: any): val is T {
  return callToString(val) === 'Function';
}

/**
 * Determine if argument is a `boolean`.
 *
 * @param val
 * @returns boolean
 */
export function isBoolean(val: any): val is boolean {
  return callToString(val) === 'Boolean';
}

/**
 * Determine if argument is a `number`.
 *
 * @param val
 * @returns boolean
 */
export function isNumber(val: any): val is number {
  return callToString(val) === 'Number';
}

/**
 * Determine if argument is `null`.
 *
 * @param val
 * @returns boolean
 */
export function isNull(val: any): val is null {
  return callToString(val) === 'Null';
}

/**
 * Determine if argument is `undefined`.
 *
 * @param val
 * @returns boolean
 */
export function isUndefined(val: any): val is undefined {
  return callToString(val) === 'Undefined';
}
