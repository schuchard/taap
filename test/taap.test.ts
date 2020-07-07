import {
  isArray,
  isObject,
  isString,
  isDate,
  isRegExp,
  isFunction,
  isBoolean,
  isNumber,
  isBigInt,
  isNull,
  isUndefined,
  getType,
} from '../src/taap';

const regExp = /\w+\s/g;

describe('isArray', () => {
  it('should return a true if an Array', () => {
    expect(isArray([])).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeArray: unknown = [1];

    if (isArray<number>(maybeArray)) {
      maybeArray.push(1);
      expect(maybeArray[1]).toEqual(1);
    }

    expect.assertions(1);
  });
});

describe('isObject', () => {
  it('should return a true if an Object', () => {
    expect(isObject({})).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeObject: unknown = { a: 1 };

    if (isObject<Record<string, number>>(maybeObject)) {
      maybeObject.b = 2;
      expect(Object.keys(maybeObject).map((v) => v)).toEqual(['a', 'b']);
      expect(Object.values(maybeObject).map((v) => v)).toEqual([1, 2]);
    }
    expect.assertions(2);
  });
});

describe('isString', () => {
  it('should return a true if a String', () => {
    expect(isString('')).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    let maybeString = 'a,b' as unknown;

    if (isString(maybeString)) {
      maybeString += ',c';
      expect(maybeString.split(',')).toEqual(['a', 'b', 'c']);
    }
    expect.assertions(1);
  });
});

describe('isDate', () => {
  it('should return a true if a Date', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeDate: unknown = new Date('August 19, 1975 23:15:30');

    if (isDate(maybeDate)) {
      maybeDate.setFullYear(1969);
      expect(maybeDate.toDateString()).toEqual('Tue Aug 19 1969');
    }

    expect.assertions(1);
  });
});

describe('isRegExp', () => {
  it('should return a true if a RegExp', () => {
    expect(isRegExp(/test/i)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeRegExp: unknown = regExp;

    if (isRegExp(maybeRegExp)) {
      const str = 'fee fi fo fum';
      expect(str.match(maybeRegExp)).toEqual(['fee ', 'fi ', 'fo ']);
      expect(maybeRegExp.test('fee fi fo fum')).toEqual(true);
    }

    expect.assertions(2);
  });
});

describe('isFunction', () => {
  it('should return a true if a Function', () => {
    expect(isFunction(() => ({}))).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeFunction: unknown = (x: number) => x.toString();

    if (isFunction<(x: number) => string>(maybeFunction)) {
      expect(maybeFunction(42)).toEqual('42');
    }

    expect.assertions(1);
  });
});

describe('isBoolean', () => {
  it('should return a true if a Boolean', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeBoolean: unknown = true;

    if (isBoolean(maybeBoolean)) {
      expect(maybeBoolean).toBe(true);
    }

    expect.assertions(1);
  });
});

describe('isNumber', () => {
  it('should return a true if a Number', () => {
    expect(isNumber(1)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeNumber: unknown = 1;

    if (isNumber(maybeNumber)) {
      expect(maybeNumber + 2).toEqual(3);
    }

    expect.assertions(1);
  });
});

describe('isBigInt', () => {
  it('should return a true if a BigInt', () => {
    expect(isBigInt(BigInt(42))).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeBigInt: unknown = BigInt(42);

    if (isBigInt(maybeBigInt)) {
      // todo target tests to ES2020 to use BigInt's: `42n`
      expect(maybeBigInt.toString()).toEqual('42');
    }

    expect.assertions(1);
  });
});

describe('isNull', () => {
  it('should return a true if an Null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeNull: unknown = null;

    if (isNull(maybeNull)) {
      expect(maybeNull).toEqual(null);
    }

    expect.assertions(1);
  });
});

describe('isUndefined', () => {
  it('should return a true if an Undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should assert the type predicate and compile', () => {
    const maybeUndefined: unknown = undefined;

    if (isUndefined(maybeUndefined)) {
      expect(maybeUndefined).toEqual(undefined);
    }

    expect.assertions(1);
  });
});

describe('getType', () => {
  test.each`
    kind           | value
    ${'Array'}     | ${[]}
    ${'Array'}     | ${[1]}
    ${'Array'}     | ${[false]}
    ${'Object'}    | ${{}}
    ${'Object'}    | ${{ a: 1 }}
    ${'String'}    | ${''}
    ${'String'}    | ${'taap'}
    ${'Date'}      | ${new Date()}
    ${'RegExp'}    | ${regExp}
    ${'RegExp'}    | ${new RegExp('a')}
    ${'Boolean'}   | ${true}
    ${'Boolean'}   | ${false}
    ${'Boolean'}   | ${!!1}
    ${'Number'}    | ${1}
    ${'Number'}    | ${2_000}
    ${'Number'}    | ${0.4}
    ${'Null'}      | ${null}
    ${'Undefined'} | ${undefined}
    ${'BigInt'}    | ${BigInt(9007199254740991)}
    ${'Function'}  | ${() => ({})}
    ${'Function'} | ${function testFunc() {
  return false;
}}
  `('returns $kind when given $value', ({ kind, value }) => expect(getType(value)).toEqual(kind));
});
