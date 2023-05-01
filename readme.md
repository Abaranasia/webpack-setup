## Creating a basic webpack setup

### Steps to follow

#### Install basic setup to read HTML and JS files
1. Create a **package.json** config file: ```npm init - y``` 
2. Install **webpack** and **webpack-cli** basic files and modules: ```npm install webpack webpack-cli --save-dev```
3. Create basic files structure under src folder: index.html, index.js...
4. Create **webpack.config.js** to include build mode (development, production, ...). Then create the "build" entry in **package.json**
5. Install **html-loader**. It creates an html file loader and exports HTML as string. HTML is minimized when the compiler demands. ```npm install html-loader --save-dev```
6. Install **html-webpack-plugin**. It simplifies creation of HTML files to serve your webpack bundles. It includes all your webpack bundles in the body using script tags: ```npm install html-webpack-plugin --save-dev``` 

#### Webpack Server
7. Install **webpack-dev-server** to serve the app. The create the "start" entry in **package.json**: ```npm i webpack-dev-server -D```

#### CSS dynamic load
8. install **style-loader** and **css-loader** to load and understand dynamically css styles:
 1. ```npm install --save-dev style-loader```
 2. ```npm install --save-dev css-loader```
9. Install **mini-css-extract-plugin** to handle global css styles:  ```npm install --save-dev mini-css-extract-plugin```

### loading files
10. Install file-loader package to allow loading assets like images: ```npm install file-loader --save-dev```