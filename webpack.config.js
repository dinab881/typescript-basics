module.exports = {
    entry: './src/app.ts', // all files from modules will compile in one ts file - app.ts
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            // array that we can then supply different loaders to test against particular file extensions -
            // testing against ts files supply loader which we can then compile this files and using webpack
            // we have a benefit of being bundle
            // so we take cake of all our modules, because at the moment import and export statements do
            // not work in a browser so we need to bundle this up using webpack does it all for us out the box

            { test: /\.ts$/, use: 'awesome-typescript-loader'}
        ]
    },
    devServer: {
        port: 3000
    }
};