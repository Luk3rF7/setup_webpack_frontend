const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// unificar arquivos
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry:'./src/principal.js', //ponto de entrada
  output: {
      filename: 'bundle.js', // nomedo arquivo raiz
      path: __dirname + '/public',  // caminho onde sera jogado arquivo
  },
/*   devServer: {
    contentBase: "./public/index.html",
    port: 9000
}, */
  optimization:{
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
    new OptimizeCSSAssetsPlugin({})
    ]
  },
      // area de plugin
  plugins: [
      // função construtora recebe obj com parametros
      new MiniCssExtractPlugin({
        // recebe nome do arq q quero criar e gerado
         filename: './css/style.min.css',  // proriedade
        
      })
  ],
  module:{   // regras - loader
    rules: [
      {   // regras
        test:/\.(sa|sc|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
    },{
      test:/\.(png|svg|jpg|gif)$/,
    } 
  ]
  }
}