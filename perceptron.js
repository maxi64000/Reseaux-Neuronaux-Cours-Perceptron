function Perceptron(threshold) {

    function neuroneIsActive(neurone) {
        if (neurone.input >= threshold) {
            return true;
        }
        else {
            return false;
        }
    }

    function process(neurones) {
        var exit = 0;

        for (var i = 0; i < neurones.length; i++) {
            if (neuroneIsActive(neurones[i])) {
                exit = exit + (neurones[i].input * neurones[i].weight);
            }
        }

        if (exit >= threshold) {
            return exit;
        }
        else {
            return 0;
        }
    }

    return {
        process: process,
        neuroneIsActive: neuroneIsActive
    };
}

module.exports = Perceptron;