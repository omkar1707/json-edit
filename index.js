async function deleteNode(json, keyToDelete, isRecursive = true, isDeleteKeyStartsWith = false) {
    const keys = Object.keys(json);
    keys.forEach(function (key) {
        const value = json[key];
        const isArray = Array.isArray(value);
        const type = Object.prototype.toString.call(value);
        const isObject = (
            type === '[object Object]' ||
            type === '[object Array]'
        );

        if (isRecursive && !isArray && isObject && Object.keys(value).length) {
            if (isDeleteKeyStartsWith) {
                if (!key.toLowerCase().startsWith(keyToDelete.toLowerCase())) {
                    return deleteNode(value, keyToDelete, isRecursive, isDeleteKeyStartsWith);
                }
            } else if (key !== keyToDelete) {
                return deleteNode(value, keyToDelete, isRecursive, isDeleteKeyStartsWith);
            }
        }

        if (isArray && value.length) {
            for (let i = 0; i < value.length; i++) {
                const insideValue = value[i];
                const isArray = Array.isArray(insideValue);
                const type = Object.prototype.toString.call(insideValue);
                const isObject = (
                    type === '[object Object]' ||
                    type === '[object Array]'
                );
                if (isRecursive && !isArray && isObject) {
                    return deleteNode(insideValue, keyToDelete, isRecursive, isDeleteKeyStartsWith);
                }
            }
        }

        if (isDeleteKeyStartsWith) {
            if (key.toLowerCase().startsWith(keyToDelete.toLowerCase())) {
                delete json[key]
            }
        } else {
            if (key === keyToDelete) {
                delete json[key]
            }
        }
    });
}

async function replaceValue(json, keyToReplace, newValue) {
    const keys = Object.keys(json);
    keys.forEach(function (key) {
        const value = json[key];
        const isArray = Array.isArray(value);
        const type = Object.prototype.toString.call(value);
        const isObject = (
            type === '[object Object]' ||
            type === '[object Array]'
        );

        if (!isArray && isObject && Object.keys(value).length) {
            if (key !== keyToReplace) {
                return replaceValue(value, keyToReplace, newValue);
            }
        }

        if (key === keyToReplace) {
            json[key] = newValue;
        }
    });
}

async function deleteValueInStringArray(json, keyToMatch, valueToDelete) {
    const keys = Object.keys(json);
    keys.forEach(function (key) {
        const value = json[key];
        const isArray = Array.isArray(value);
        const type = Object.prototype.toString.call(value);
        const isObject = (
            type === '[object Object]' ||
            type === '[object Array]'
        );

        if (!isArray && isObject && Object.keys(value).length) {
            return deleteValueInStringArray(value, keyToMatch, valueToDelete);
        }

        if (key === keyToMatch) {
            if (isArray && value.length > 0) {
                const index = getIndex(value, valueToDelete);
                value.splice(index, 1);
            }
        }
    });
}

function getIndex(value, keyStartWith) {
    for (let i = 0; i < value.length; i++) {
        const val = value[i];
        if (val.toLowerCase().startsWith(keyStartWith.toLowerCase()))
            return i;
    }
    return -1;
}

module.exports = {
    deleteNode,
    replaceValue,
    deleteValueInStringArray
};
