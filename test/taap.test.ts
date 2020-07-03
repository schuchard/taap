import {
  isArray,
  isObject,
  isString,
  isDate,
  isRegExp,
  isFunction,
  isBoolean,
  isNumber,
  isNull,
  isUndefined,
} from '../src/taap';

describe('isArray', () => {
  it('should return a true if an Array', () => {
    expect(isArray([])).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const arr = [1] as unknown;

    if (isArray<number>(arr)) {
      arr.push(1);
      expect(arr[1]).toEqual(1);
    }

    expect.assertions(1);
  });
});

describe('isObject', () => {
  it('should return a true if an Object', () => {
    expect(isObject({})).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const obj = { a: 1 } as unknown;

    if (isObject<Record<string, number>>(obj)) {
      obj.b = 2;
      expect(Object.keys(obj).map((v) => v)).toEqual(['a', 'b']);
      expect(Object.values(obj).map((v) => v)).toEqual([1, 2]);
    }
    expect.assertions(2);
  });
});

describe('isString', () => {
  it('should return a true if a String', () => {
    expect(isString('')).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    let str = 'a,b' as unknown;

    if (isString(str)) {
      str += ',c';
      expect(str.split(',')).toEqual(['a', 'b', 'c']);
    }
    expect.assertions(1);
  });
});

describe('isDate', () => {
  it('should return a true if a Date', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const date = new Date('August 19, 1975 23:15:30') as unknown;

    if (isDate(date)) {
      date.setFullYear(1969);
      expect(date.toDateString()).toEqual('Tue Aug 19 1969');
    }

    expect.assertions(1);
  });
});

describe('isRegExp', () => {
  it('should return a true if a RegExp', () => {
    expect(isRegExp(/test/i)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const regex = /\w+\s/g as unknown;

    if (isRegExp(regex)) {
      const str = 'fee fi fo fum';
      expect(str.match(regex)).toEqual(['fee ', 'fi ', 'fo ']);
      expect(regex.test('fee fi fo fum')).toEqual(true);
    }

    expect.assertions(2);
  });
});

describe('isFunction', () => {
  it('should return a true if a Function', () => {
    expect(isFunction(() => ({}))).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const func = ((x: any) => x) as unknown;

    if (isFunction<(x: number) => number>(func)) {
      expect(func(42)).toEqual(42);
    }

    expect.assertions(1);
  });
});

describe('isBoolean', () => {
  it('should return a true if a Boolean', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const bool = true as unknown;

    if (isBoolean(bool) && bool === true) {
      expect(bool).toBe(true);
    }

    expect.assertions(1);
  });
});

describe('isNumber', () => {
  it('should return a true if a Number', () => {
    expect(isNumber(1)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const num = 1 as unknown;

    if (isNumber(num)) {
      expect(num + 2).toEqual(3);
    }

    expect.assertions(1);
  });
});

describe('isNull', () => {
  it('should return a true if an Null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const nullVal = null as unknown;

    if (isNull(nullVal)) {
      expect(nullVal).toEqual(null);
    }

    expect.assertions(1);
  });
});

describe('isUndefined', () => {
  it('should return a true if an Undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const undefinedVal = undefined as unknown;

    if (isUndefined(undefinedVal)) {
      expect(undefinedVal).toEqual(undefined);
    }

    expect.assertions(1);
  });
});
