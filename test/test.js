const assert = require('assert');
const jsonEdit = require('../index');

//Delete Function
describe('Delete Top Level', function () {
    const input = {
        a: 1,
        b: 2,
        c: 3
    };
    const output = {
        b: 2,
        c: 3
    };
    it('should match', function () {
        jsonEdit.deleteNode(input, 'a', false);
        assert.deepStrictEqual(input, output);
    });
});

describe('Delete Nested Level', function () {
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
            f: {}
        }
    };
    it('should match', function () {
        jsonEdit.deleteNode(input, 'g', true);
        assert.deepStrictEqual(input, output);
    });
});

describe('Delete Nested Node', function () {
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
            e: 4
        }
    };
    it('should match', function () {
        jsonEdit.deleteNode(input, 'f', true);
        assert.deepStrictEqual(input, output);
    });
});


describe('Do Not Delete Nested Node isRecursive=false', function () {
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
                g: 5
            }
        }
    };
    it('should match', function () {
        jsonEdit.deleteNode(input, 'f', false);
        assert.deepStrictEqual(input, output);
    });
});


describe('Delete Array Element', function () {
    const input = {
        a: 1,
        b: 2,
        c: [
            {d: 1}
        ]
    };
    const output = {
        a: 1,
        b: 2,
        c: [
            {}
        ]
    };
    it('should match', function () {
        jsonEdit.deleteNode(input, 'd', true);
        assert.deepStrictEqual(input, output);
    });
});


describe('Delete Nested Array Element', function () {
    const input = {
        a: 1,
        b: 2,
        c: [
            {
                d: [
                    {
                        e: 1,
                        f: 2
                    }
                ]
            }
        ]
    };
    const output = {
        a: 1,
        b: 2,
        c: [
            {
                d: [
                    {
                        f: 2
                    }
                ]
            }
        ]
    };
    it('should match', function () {
        jsonEdit.deleteNode(input, 'e', true);
        assert.deepStrictEqual(input, output);
    });
});

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
