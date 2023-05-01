## Creating a basic webpack setup

### steps to follow
1. ```npm init - y``` // to create a package.json config file
2. ```npm install webpack webpack-cli --save-dev``` // Installs webpack basic files and modules
3. Create basic files structure under src folder: index.html, index.js...
4. Create **webpack.config.js** to inclide build mode (development, production, ...)
5. ```npm install html-loader --save-dev``` // Creates an html file loader and exports HTML as string. HTML is minimized when the compiler demands.
6. ```npm install html-webpack-plugin --save-dev``` // simplifies creation of HTML files to serve your webpack bundles. It includes all your webpack bundles in the body using script tags.
