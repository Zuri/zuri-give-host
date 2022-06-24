# Zuri Give Host

# Usage

Features:  

Web app accepts these url parameters:  
form.open (should form open on page load)  
form.id (passed to Iframe)  
ea.profile.id (passed to Iframe)  
supporter.appealCode (passed to Iframe)  
Example url params:  
?form.id=29654&ea.profile.id=1234&supporter.appealCode=1234&form.open=true  

Should Open Form On Page Load
When the form.open url param is set to true, the lightbox form will open when the page loads.

Session Storage Time Manager
If the form has already opened on page load it won't automatically open on the site again until 5 minutes passes or a new session begins.

Create Form Source
Takes parameters from the url and passes them to the Engaging Networks Form.

Modal
Holds the EN form inside of a lightbox. Handles messaging between the Iframe and the Vue app.

Toggle Modal Button
Visibility of Modal / Lightbox is toggled by a button on the side of the page.

ToastContainer
Creates toast messages in the bottom right corner about the status of the form. For example: 'abandoned form' 'form completed'

# Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command npm install by the command promt

# Development server:

- npm start
- You can view the development server at `localhost:8080`.

# Production build:

- npm run build

# To view the build use http-server:

- npm prod

# Features

- [webpack](https://webpack.js.org/)
- [vue.js](https://vuejs.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

# Dependencies

# Vue.js

- [`vue`](https://www.npmjs.com/package/vue) - A framework for making user interfaces
- [`vue-router`](https://www.npmjs.com/package/vue-router) - Routing in Vue

# Babel

- [`@babel-runtime`](https://babeljs.io/docs/en/babel-runtime) - Babel Runtime for dev babel/plugin-transform-runtime.

# Other

- [`core-js`](https://www.npmjs.com/package/core-js) - Main Library with polyfills for older Browsers
- [`whatwg-fetch`](https://www.npmjs.com/package/whatwg-fetch) - For making promise based web request progammitically

# devDependencies

# webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

# Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to ES5
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Babel to use async/await
- [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/plugin-proposal-object-rest-spread) - Babel helper
- [`@babel/plugin-transform-arrow-functions`](https://babeljs.io/docs/en/plugin-transform-arrow-functions) - For arrow functions
- [`@babel/plugin-transform-async-to-generator`](https://babeljs.io/docs/en/plugin-transform-async-to-generator) - Generator for async/await
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties on a class

# Vue Loaders

- [`vue-loader`](https://www.npmjs.com/package/vue-loader) - webpack loader for Vue Single-File Components
- [`vue-style-loader`](https://www.npmjs.com/package/vue-style-loader) - Load styles into the DOM
- [`vue-template-compiler`](https://www.npmjs.com/package/vue-template-compiler) - Pre compilation of Vue 2.0 templates into render functions

# Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files - Babel/webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

# Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration
- [`http-server`](https://www.npmjs.com/package/http-server) - HTTP server for testing the produktion build by running npm run prod

# Author

- Per Olsen

# License

This project is open source and available under the [MIT License](LICENSE).
