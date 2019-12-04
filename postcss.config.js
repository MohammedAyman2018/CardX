module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./index.html', './js/plugin.js'],
            css: ["./css/**/.css", "./css/*.css"]
          })
    ]
}