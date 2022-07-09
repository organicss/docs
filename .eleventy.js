const eleventySass = require('eleventy-sass');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = function (config) {
    config.addNunjucksGlobal('getYear', function () {
        return new Date().getFullYear();
    });

    config.addPlugin(eleventySass, {
        postcss: postcss([autoprefixer, cssnano]),
    });

    config.addPassthroughCopy('./src/fonts');
    config.addPassthroughCopy('./src/assets/icons');
    config.addPassthroughCopy('./src/assets/images');

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    };
};
