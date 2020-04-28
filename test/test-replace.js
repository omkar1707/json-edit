const assert = require('assert');
const fs = require('fs');
const jsonEdit = require('../index');

//Replace Function
describe('Replace Top Level', function () {
    const input = {
        a: 1,
        b: 2,
        c: 3
    };
    const output = {
        a: 2,
        b: 2,
        c: 3
    };
    it('should match', function () {
        jsonEdit.replaceValue(input, 'a', 2);
        assert.deepStrictEqual(input, output);
    });
});

describe('Replace Nested Level', function () {
    const input = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: {
                g: 5
            }
        }
    };
    const output = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: {
                g: 6
            }
        }
    };
    it('should match', function () {
        jsonEdit.replaceValue(input, 'g', 6);
        assert.deepStrictEqual(input, output);
    });
});

describe('Replace Nested Node with Value', function () {
    const input = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: {
                g: 5
            }
        }
    };
    const output = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: 5
        }
    };
    it('should match', function () {
        jsonEdit.replaceValue(input, 'f', 5);
        assert.deepStrictEqual(input, output);
    });
});


describe('Replace Nested Node with Node', function () {
    const input = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: {
                g: 5
            }
        }
    };
    const output = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
            f: {
                h: 6,
                i: 7
            }
        }
    };
    it('should match', function () {
        jsonEdit.replaceValue(input, 'f', {h: 6, i: 7});
        assert.deepStrictEqual(input, output);
    });
});
