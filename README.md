apply [![Build Status](https://travis-ci.org/nathanfaucett/apply.svg?branch=master)](https://travis-ci.org/nathanfaucett/apply)
=======

apply for calling functions with array of arguments

```javascript
var apply = require("@nathanfaucett/apply");


function add() {
    var out = 0;

    for (var i = 0, il = arguments.length; i < il; i++) {
        out += arguments[i];
    }
    
    return out;
}

apply(add, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
```
