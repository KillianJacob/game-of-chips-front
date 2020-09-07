const path = require('path');

module.exports = {
    entry: "./loader.js",
    mode: "production",
    watch : true,
    output: {
        path: path.resolve("./"),
        filename : "loader.min.js"
    }
}