var Perceptron = require("./perceptron.js");
var Neurone = require("./neurone.js");

describe ("Perceptron", function() {
    var perceptron;

    beforeEach (function() {
        perceptron = new Perceptron(0.5);
    });

    function expectIsActive(neurone, output) {
        var result = perceptron.neuroneIsActive(neurone);
        expect(result).toEqual(output);
    }

    function expectResult(neurones, output) {
        var result = perceptron.process(neurones);
        expect(result).toEqual(output);
    }

    it ("should be inactive if input < threshold", function() {
        var neurone = new Neurone(0, 0);

        expectIsActive(neurone,false);
    });

    it ("should be active if input >= threshold", function() {
        var neurone = new Neurone(0.5, 1);

        expectIsActive(neurone,true);
    });

    it ("should output 0 if input 0", function() {
        var neurones = [];
        neurones.push(new Neurone(0, 0));

        expectResult(neurones,0);
    });

    it ("should output 0 if input < threshold", function() {
        var neurones = [];
        neurones.push(new Neurone(0.25, 1));

        expectResult(neurones,0);
    });

    it ("should output input*weight if input >= threshold", function() {
        var neurones = [];
        neurones.push(new Neurone(0.5, 1));

        var output = neurones[0].input * neurones[0].weight;

        expectResult(neurones, output);
    });

    it ("should output 0 if neurones are inactives", function() {
        var neurones = [];
        neurones.push(new Neurone(0.25, 1));
        neurones.push(new Neurone(0.25, 1));

        expectResult(neurones, 0);
    });

    it ("should output the first neurone exit if the first neurone is active and the second is inactive", function() {
        var neurones = [];
        neurones.push(new Neurone(0.5, 1));
        neurones.push(new Neurone(0.25, 1));

        var output = neurones[0].input * neurones[0].weight;

        expectResult(neurones, output);
    });

    it ("should output the sum of neurones exit if neurones are actives", function() {
        var neurones = [];
        neurones.push(new Neurone(0.5, 1));
        neurones.push(new Neurone(0.5, 1));

        var output = (neurones[0].input * neurones[0].weight) + (neurones[1].input * neurones[1].weight);

        expectResult(neurones, output);
    });

});