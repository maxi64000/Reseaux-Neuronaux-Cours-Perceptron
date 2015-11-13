function Perceptron() {
    function process(input, weight) {
        return input*weight;
    }

    return {
        process: process
    };
}

function PerceptronEntry() {

}

function PerceptronExit() {

}

module.exports = Perceptron;