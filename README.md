# Webpack Todo

This is a Todo Application written in JavaScript for the purpose of studying webpack.
It uses [sakura](https://github.com/oxalorg/sakura) just for the purpose of demonstrating importing css into JavaScript files.

## Running
- Run `npm install` once to download the required dependencies
- Run `npm run serve` to start webpack-dev-server with hot module reloading
  - The application will be running at `localhost:8080`
- Run `npm run bundle` to create the `dist` folder where the application will be bundled.
  - You can now open the application in a browser with `open ./dist/index.html`

## Notes for future
- In order to make how module work I had to add the following in `index.js`:
```
if (module.hot) {
  module.hot.accept();
}
```
- Application can easily be debugged using IntelliJ with a DebugJS configuration
  - I needed to add remote url: `webpack:///.` to make debugging work, see `intellij.png`
