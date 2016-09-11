var webpack = require('webpack')
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/components/main.jsx'
  ],
  externals: {
    jquery: 'jQuery'
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
      Home: 'app/components/Home.jsx',
      Login: 'app/components/Login.jsx',
      About: 'app/components/About.jsx',
      Signup: 'app/components/Signup.jsx',
      Nav: 'app/components/Nav.jsx',
      Rolenav: 'app/components/Rolenav.jsx',
      Receipt: 'app/components/Receipt.jsx',
      Profiles: 'app/components/Profiles.jsx',
      Profile: 'app/components/Profile.jsx',
      User: 'app/components/User.jsx',
      Edituser: 'app/components/Edituser.jsx',
      Profilecamera: 'app/components/Profilecamera.jsx',
      Photos: 'app/components/Photos.jsx',
      cofoundersApi: 'app/api/cofoundersApi.jsx',
      applicationStyles: 'app/styles/challenge.css'

    },
    extensions: ['', '.js', 'jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
