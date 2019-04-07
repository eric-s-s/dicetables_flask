
QUnit.test("instantiate a Roller with default randomizer function", function (assert) {
    const height = "5";
    const expectedLength = 2;
    const aliases = [
        {primary: '1', alternate: '2', primaryHeight: '3'},
        {primary: '2', alternate: '2', primaryHeight: '5'}
    ];
    const roller = new Roller(height, aliases);
    assert.deepEqual(roller.height, height, "heights is correct");
    assert.deepEqual(roller.length, expectedLength, "length is correct");
    assert.deepEqual(roller.aliases, aliases, "aliases are copied");
    assert.notOk(roller.aliases === aliases, "roller aliases are a slice of input");
    assert.strictEqual(roller.randomizer, bigInt.randBetween, "roller starts with a bigInt randomizer")
});

QUnit.test("instantiate a Roller with a randomizer function", function (assert) {
    const height = "5";
    const expectedLength = 2;
    const aliases = [
        {primary: '1', alternate: '2', primaryHeight: '3'},
        {primary: '2', alternate: '2', primaryHeight: '5'}
    ];
    function myRandomizer(){return 1;}
    const roller = new Roller(height, aliases, myRandomizer);
    assert.deepEqual(roller.height, height, "heights is correct");
    assert.deepEqual(roller.length, expectedLength, "length is correct");
    assert.deepEqual(roller.aliases, aliases, "aliases are copied");
    assert.notOk(roller.aliases === aliases, "roller aliases are a slice of input");

    assert.strictEqual(roller.randomizer, myRandomizer, "roller has myRandomizer")
});

QUnit.test("Roller.roll on a simple distribution with default random", function (assert) {
    const height = "3";
    const aliases = [
        {primary: '1', alternate: '1', primaryHeight: '3'},
        {primary: '2', alternate: '2', primaryHeight: '3'}
    ];

    const roller = new Roller(height, aliases);

    const answer = [];

    Math.seedrandom('sjkf');
    for (let i=0; i< 100; i++) {
        answer.push(roller.roll());
    }
    const counts = {};

    for (let i=0; i< answer.length;i++) {
        const number = answer[i];
        counts[number] = counts[number] ? counts[number] + 1: 1;
    }

    assert.deepEqual(counts, {1: 53, 2: 47}, "rolls this much");
});

QUnit.test("Roller.roll on a high number distribution with default random", function (assert) {
    const height = "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
        "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
        "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
        "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
        "000000000";
    const aliases = [
        {primary: '1', alternate: '1', primaryHeight: '1000000000000000000000000000000000000000000000000000000' +
                '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' +
                '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' +
                '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' +
                '0000000000000000000000000000000000000000000000000000000000000000000'},
        {primary: '2', alternate: '2', primaryHeight: '1000000000000000000000000000000000000000000000000000000' +
                '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' +
                '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' +
                '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' +
                '0000000000000000000000000000000000000000000000000000000000000000000'}
    ];

    const roller = new Roller(height, aliases);

    const answer = [];

    Math.seedrandom('hjkjh');
    for (let i=0; i< 100; i++) {
        answer.push(roller.roll());
    }
    const counts = {};

    for (let i=0; i< answer.length;i++) {
        const number = answer[i];
        counts[number] = counts[number] ? counts[number] + 1: 1;
    }

    assert.deepEqual(counts, {1: 54, 2: 46}, "rolls this much");
});
