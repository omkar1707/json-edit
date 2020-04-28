const assert = require('assert');
const fs = require('fs');
const jsonEdit = require('../index');

//Replace Function
describe('Delete String in Array', function () {
    const input = {
        a: 1,
        b: 2,
        c: [
            "a",
            "bcde",
            "c",
            "d"
        ]
    };
    const output = {
        a: 1,
        b: 2,
        c: [
            "a",
            "c",
            "d"
        ]
    };
    it('should match', function () {
        jsonEdit.deleteValueInStringArray(input, 'c', "bC");
        assert.deepStrictEqual(input, output);
    });
});

/*describe('Test File', function () {

    const data = fs.readFileSync('/Users/onkar/FT/gatekeeper/.serverless/cloudformation-template-update-stack.json', 'utf8');
    const json = JSON.parse(data);

    it('should match', function () {
        jsonEdit.deleteValueInStringArray(json, 'DependsOn', "agora");
        console.log(JSON.stringify(json, null, 2))
    });
});*/
