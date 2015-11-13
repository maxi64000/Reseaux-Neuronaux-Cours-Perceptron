var Perceptron = require("./perceptron.js");

describe ("Perceptron", function() {
    var perceptron;

    beforeEach (function() {
        perceptron = new Perceptron();
    });

    function expectResult(input, weight, output) {
        var result = perceptron.process(input, weight);
        expect(result).toEqual(output);
    }

    it ("should ouput 0 if input 0", function() {
        expectResult(0,0,0);
    });

    it ("should ouput 1 if input 1 and weight is 1", function() {
        expectResult(1,1,1);
    });

    it ("should ouput 0.6 if input 1 and weight is 0.6", function() {
        expectResult(1,0.6,0.6);
    });

    it ("should output 0 if input 0 - 0 and weight 0 - 0", function() {

    });


});