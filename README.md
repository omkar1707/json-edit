# json-edit
This module give you ability to manipulate JSON Object.

**Features:**
- Delete json node (recursive/non-recursive/)
- Delete json node nested inside array
- Replace key with new value
- Delete json node (key contains given vale)


**Install**
```
npm i @json-edit/json-edit
```

**Initialize**
```
const jsonEdit = require('@json-edit/json-edit');
```

**How to use**
1. Delete Node
```
jsonEdit.deleteNode(json, keyToDelete, isRecursive = true);
```

2. Replace Key with New Value
```
jsonEdit.replaceValue(json, keyToReplace, newValue);
```

3. Delete Value in nested array
```
jsonEdit.deleteValueInStringArray(json, keyToMatch, valueToDelete);
```
