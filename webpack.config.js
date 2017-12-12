var path = require('path');

module.exports = {
    entry: [
        './src/scripts/app.js',
        './src/scripts/controllers.js',
        './src/scripts/directives.js',
        './src/scripts/services.js'
    ],
    output:{
        path: path.resolve('dist/'),
        filename: "bundle.js"
    }
}
