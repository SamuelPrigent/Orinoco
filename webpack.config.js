const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

// il faudra changer le nom des fichiers pour cela fonctionne
// il faudra comprendre a quoi sert / npm run build / et que fais ce script
// permet par exemple de compiler le 
// async / await que l'on code compatible avec la navigateur car pas encore supporté
// exclude les fichiers js de npm dans node_module car ceux là on ne veut pas les modifier

