var tape = require("tape"),
    apply = require("..");


tape("apply(fn, args[, thisArg])", function(assert) {
    function add() {
        var result = 0,
            i = -1,
            il = arguments.length - 1;

        while (i++ < il) {
            result += arguments[i];
        }

        return result;
    }

    assert.equal(apply(add, []), 0);
    assert.equal(apply(add, [0]), 0);
    assert.equal(apply(add, [0, 1]), 1);
    assert.equal(apply(add, [0, 1, 2]), 3);
    assert.equal(apply(add, [0, 1, 2, 3]), 6);
    assert.equal(apply(add, [0, 1, 2, 3, 4]), 10);
    assert.equal(apply(add, [0, 1, 2, 3, 4, 5]), 15);

    assert.end();
});
