function makeSciNumArray(strPairsArray) {
    return strPairsArray.map(function (t) {
        return new SciNum(t[0], t[1]);
    });
}

function createStatsObj(total, sciNumArr) {
    const statsObj = {};
    const arrSum = sumSciNum(sciNumArr);
    statsObj.occurrences = arrSum.toFancyStr();
    statsObj.oneInChance = total.div(arrSum).toFancyStr();
    const pct = arrSum.div(total).mul(new SciNum(1, 2));
    statsObj.pctChance = pct.toFancyStr();
    statsObj.total = total.toFancyStr();
    return statsObj;
}

function createSciNumObj(rollToMantissaPowerArr) {
    const outObj = {};
    const forTotal = [];
    for (const roll in rollToMantissaPowerArr) {
        if (rollToMantissaPowerArr.hasOwnProperty(roll)) {
            const manPowArr = rollToMantissaPowerArr[roll];
            const number = new SciNum(manPowArr[0], manPowArr[1]);
            outObj[roll] = number;
            forTotal.push(number);
        }
    }
    outObj["total"] = sumSciNum(forTotal);
    return outObj;
}

function getStats(sciNumObj, numArr) {
    const sciNumArr = numArr.map(function (t) {
        return getSciNumValue(sciNumObj, t);
    });
    return createStatsObj(sciNumObj.total, sciNumArr);
}

function getSciNumValue(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : new SciNum(0, 0);
}