module.exports = function (config) {
    config.addNunjucksGlobal('getYear', function () {
        return new Date().getFullYear();
    });

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    };
};
