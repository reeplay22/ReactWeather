var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherNextForm: 'app/components/WeatherNextForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherNextMessage: 'app/components/WeatherNextMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      Extra: 'app/components/Extra.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',
      //picture: 'app/images/unnamed.png'
    },

    extensions: ['','.js','.jsx']
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      },
      // {
      //   loader: 'react-image-load',
      //   test: /\.(jpe?g|png|gif|svg)$/i
      // },
      {
        loader: 'url-loader',
        test:/\.(png|jpg)$/,
        options: {
          limit: 25000
        }
      },
      {
        loader: 'file-loader',
        test:/\.(jpg|png)$/

      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
