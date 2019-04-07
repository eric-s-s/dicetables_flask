function Roller(height, aliasArray, randomizer) {
    this.height = height;
    this.aliases = aliasArray.slice();
    this.length = this.aliases.length;
    this.randomizer = randomizer === undefined ? bigInt.randBetween: randomizer;

    this.roll = function () {
        const get_length = this.randomizer("0", bigInt(this.length).minus("1"));
        const get_height = this.randomizer("0", bigInt(this.height).minus("1"));
        const alias = this.aliases[get_length];
        // console.log(bigInt(this.height).minus("1"));
        // console.log(get_length);
        // console.log(alias);
        return bigInt(get_height).lt(alias.primaryHeight) ? alias.primary: alias.alternate;
    };

}