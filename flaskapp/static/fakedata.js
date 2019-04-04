var colorsFakeData = [
    '#1f77b4',  // muted blue  rgba(31,119,180, 1)
    '#ff7f0e',  // safety orange  rgba(255,127,14, 1)
    '#2ca02c',  // cooked asparagus green  rgba(44,160,44, 1)
    '#d62728',  // brick red  rgba(214,39,40, 1)
    '#9467bd',  // muted purple  rgba(148,103,189, 1)
    '#8c564b',  // chestnut brown  rgba(140,86,75, 1)
    '#e377c2',  // raspberry yogurt pink  rgba(227,119,194, 1)
    '#7f7f7f',  // middle gray  rgba(127,127,127, 1)
    '#bcbd22',  // curry yellow-green  rgba(188,189,34, 1)
    '#17becf'  // blue-teal  rgba(23,190,207, 1)
];

var colorsRGBA = [
    'rgba(31,119,180, 0.5)',
    'rgba(255,127,14, 0.5)',
    'rgba(44,160,44, 0.5)',
    'rgba(214,39,40, 0.5)',
    'rgba(148,103,189, 0.5)',
    'rgba(140,86,75, 0.5)',
    'rgba(227,119,194, 0.5)',
    'rgba(127,127,127, 0.5)',
    'rgba(188,189,34, 0.5)',
    'rgba(23,190,207, 0.5)'
];


var fakeAnswer1 = {
    'data': {
        "x": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        "y": [1.5625, 4.6875, 9.375, 15.624999999999998, 18.75, 18.75, 15.624999999999998, 9.375, 4.6875, 1.5625]
    },
    'name': '<DiceTable containing [3D4]>',
    "diceStr": "Die(4): 3",
    'tableString': ' 3: 1\n 4: 3\n 5: 6\n 6: 10\n 7: 12\n 8: 12\n 9: 10\n10: 6\n11: 3\n12: 1\n',
    'forSciNum': [
        {"roll": 3, "mantissa": '1.00000', "exponent": '0'},
        {"roll": 4, "mantissa": '3.00000', "exponent": '0'},
        {"roll": 5, "mantissa": '6.00000', "exponent": '0'},
        {"roll": 6, "mantissa": '1.00000', "exponent": '1'},
        {"roll": 7, "mantissa": '1.20000', "exponent": '1'},
        {"roll": 8, "mantissa": '1.20000', "exponent": '1'},
        {"roll": 9, "mantissa": '1.00000', "exponent": '1'},
        {"roll": 10, "mantissa": '6.00000', "exponent": '0'},
        {"roll": 11, "mantissa": '3.00000', "exponent": '0'},
        {"roll": 12, "mantissa": '1.00000', "exponent": '0'}
    ]
    ,
    'stddev': 1.9365,
    'mean': 7.5,
    'range': [3, 12]
};

var fakeAnswer2 = {
    "name": "<DiceTable containing [3D6]>",
    "diceStr": "Die(6): 3",
    "data": [
        [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        [0.4629629629629629, 1.3888888888888888, 2.7777777777777777, 4.62962962962963, 6.944444444444444,
            9.722222222222221, 11.574074074074073, 12.5, 12.5, 11.574074074074073, 9.722222222222221, 6.944444444444444,
            4.62962962962963, 2.7777777777777777, 1.3888888888888888, 0.4629629629629629]
    ],
    "tableString": " 3: 1\n 4: 3\n 5: 6\n 6: 10\n 7: 15\n 8: 21\n 9: 25\n10: 27\n11: 27\n12: 25\n13: 21\n14: 15\n15: 10\n16: 6\n17: 3\n18: 1\n",
    "forSciNum":
        [
            {"roll": "3",  "mantissa": "1.00000", "exponent": "0"},
            {"roll": "4",  "mantissa": "3.00000", "exponent": "0"},
            {"roll": "5",  "mantissa": "6.00000", "exponent": "0"},
            {"roll": "6",  "mantissa": "1.00000", "exponent": "1"},
            {"roll": "7",  "mantissa": "1.50000", "exponent": "1"},
            {"roll": "8",  "mantissa": "2.10000", "exponent": "1"},
            {"roll": "9",  "mantissa": "2.50000", "exponent": "1"},
            {"roll": "10",  "mantissa": "2.70000", "exponent": "1"},
            {"roll": "11",  "mantissa": "2.70000", "exponent": "1"},
            {"roll": "12",  "mantissa": "2.50000", "exponent": "1"},
            {"roll": "13",  "mantissa": "2.10000", "exponent": "1"},
            {"roll": "14",  "mantissa": "1.50000", "exponent": "1"},
            {"roll": "15",  "mantissa": "1.00000", "exponent": "1"},
            {"roll": "16",  "mantissa": "6.00000", "exponent": "0"},
            {"roll": "17",  "mantissa": "3.00000", "exponent": "0"},
            {"roll": "18",  "mantissa": "1.00000", "exponent": "0"}
        ],
    "range": [3, 18],
    "mean": 10.5,
    "stddev": 2.958
};

var fakeAnswer3 = {
    "name": "<DiceTable containing [-2, 3D6]>",
    "diceStr": "Modifier(-2): 1\nDie(6): 3",
    "data": [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [
            0.4629629629629629, 1.3888888888888888, 2.7777777777777777, 4.62962962962963, 6.944444444444444,
            9.722222222222221, 11.574074074074073, 12.5, 12.5, 11.574074074074073, 9.722222222222221, 6.944444444444444,
            4.62962962962963, 2.7777777777777777, 1.3888888888888888, 0.4629629629629629
        ]
    ],
    "tableString": " 1: 1\n 2: 3\n 3: 6\n 4: 10\n 5: 15\n 6: 21\n 7: 25\n 8: 27\n 9: 27\n10: 25\n11: 21\n12: 15\n13: 10\n14: 6\n15: 3\n16: 1\n",
    "forSciNum": [
        {"roll": "1", "mantissa": "1.00000", "exponent": "0"},
        {"roll": "2", "mantissa": "3.00000", "exponent": "0"},
        {"roll": "3", "mantissa": "6.00000", "exponent": "0"},
        {"roll": "4", "mantissa": "1.00000", "exponent": "1"},
        {"roll": "5", "mantissa": "1.50000", "exponent": "1"},
        {"roll": "6", "mantissa": "2.10000", "exponent": "1"},
        {"roll": "7", "mantissa": "2.50000", "exponent": "1"},
        {"roll": "8", "mantissa": "2.70000", "exponent": "1"},
        {"roll": "9", "mantissa": "2.70000", "exponent": "1"},
        {"roll": "10", "mantissa": "2.50000", "exponent": "1"},
        {"roll": "11", "mantissa": "2.10000", "exponent": "1"},
        {"roll": "12", "mantissa": "1.50000", "exponent": "1"},
        {"roll": "13", "mantissa": "1.00000", "exponent": "1"},
        {"roll": "14", "mantissa": "6.00000", "exponent": "0"},
        {"roll": "15", "mantissa": "3.00000", "exponent": "0"},
        {"roll": "16", "mantissa": "1.00000", "exponent": "0"}
    ],
    "range": [1, 16],
    "mean": 8.5,
    "stddev": 2.958
};

var fakeAnswer4 = {
    "name": "<DiceTable containing [1D4, 2D6]>",
    "diceStr": "Die(4): 1\nDie(6): 2",
    "data": [
        [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [
            0.6944444444444444, 2.0833333333333335, 4.166666666666667, 6.944444444444444, 9.722222222222221, 12.5,
            13.888888888888888, 13.888888888888888, 12.5, 9.722222222222221, 6.944444444444444, 4.166666666666667,
            2.0833333333333335, 0.6944444444444444
        ]
    ],
    "tableString": " 3: 1\n 4: 3\n 5: 6\n 6: 10\n 7: 14\n 8: 18\n 9: 20\n10: 20\n11: 18\n12: 14\n13: 10\n14: 6\n15: 3\n16: 1\n",
    "forSciNum": [
        {"roll": "3", "mantissa": "1.00000", "exponent": "0"},
        {"roll": "4", "mantissa": "3.00000", "exponent": "0"},
        {"roll": "5", "mantissa": "6.00000", "exponent": "0"},
        {"roll": "6", "mantissa": "1.00000", "exponent": "1"},
        {"roll": "7", "mantissa": "1.40000", "exponent": "1"},
        {"roll": "8", "mantissa": "1.80000", "exponent": "1"},
        {"roll": "9", "mantissa": "2.00000", "exponent": "1"},
        {"roll": "10", "mantissa": "2.00000", "exponent": "1"},
        {"roll": "11", "mantissa": "1.80000", "exponent": "1"},
        {"roll": "12", "mantissa": "1.40000", "exponent": "1"},
        {"roll": "13", "mantissa": "1.00000", "exponent": "1"},
        {"roll": "14", "mantissa": "6.00000", "exponent": "0"},
        {"roll": "15", "mantissa": "3.00000", "exponent": "0"},
        {"roll": "16", "mantissa": "1.00000", "exponent": "0"}
    ],
    "range": [3, 16],
    "mean": 9.5,
    "stddev": 2.6615
};


var fakeList = [fakeAnswer1, fakeAnswer2, fakeAnswer3, fakeAnswer4];

