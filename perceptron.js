function Perceptron(threshold, outputCount) {

    function neuroneIsActive(neurone) {
        if (neurone.input >= threshold) {
            return true;
        }
        else {
            return false;
        }
    }

    function process(neurones) {
        var exit = [];
        for (var i = 0; i < outputCount; i++) {
            exit[i] = 0;
        }

        for (var i = 0; i < neurones.length; i++) {
            if (neuroneIsActive(neurones[i])) {
                if (outputCount > 1) {
                    for (var j = 0; j < outputCount; j++) {
                        exit[j] = exit[j] + (neurones[i].input * neurones[i].weight[j]);
                    }
                }
                else {
                    exit[0] = exit[0] + (neurones[i].input * neurones[i].weight);
                }
            }
        }

        for (var i = 0; i < exit.length; i++) {
            if (exit[i] < threshold) {
                exit[i] = 0;
            }
        }

        return exit;
    }

    return {
        process: process,
        neuroneIsActive: neuroneIsActive
    };
}

module.exports = Perceptron;