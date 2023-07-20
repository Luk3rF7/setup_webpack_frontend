#    webpack frontend

 <h3> Configurando webpack </h3>
<section>
 <h2> config inicial packager </h2>
          
          
            "scripts": {  
                   <!-- serão gerado script -->
                  "start": "webpack",
              },         
            "devDependencies": {
                  
                  <!-- dependencia utilizada  -->
                  <!-- para desenvolver -->


             "css-loader": "^6.8.1",
            "style-loader": "^3.3.3",
             "webpack": "^5.88.2",
             "webpack-cli": "^5.1.4"
             }

</section>

<h2> npm initial </h2>

<li> <b>npm init -y </b>
<li> <b>yarn add -D webpack </b>
<li> <b>yarn add -D webpack-cli  </b>



 <h2> webpack config.js </h2>


 <h3>mode: existe dois tipo "development" "production"  </h3>
 <h3>entry:  local raiz onde sera executado webpack </h3>
 <h3>module: local onde fica loader e regras  </h3>
 <h3></h3>
 <h3></h3>
 <h3></h3>


<section>
 <h2> modulos </h2>
          
          
           import Pessoa from './pessoa'
           
            =  * modulos será executado caso   * =
            =  * se import dentro do arq enrty * =
           
          import './modulos/moduloA'
          
          
          const atendente = new Pessoa
          console.log(atendente.cumprimentar())

</section>
<section>
 <h2> config de saida </h2>
                    
      output: {
      filename: 'principal.js', // nomedo arquivo raiz
      path: __dirname + '/public',  // caminho onde sera jogado arquivo
      }
  

</section>
<section>

</section>
<section>

 <h2> Carregamento Css  & Scss</h2>
  <p> dependencia:
  <li> yarn add -D css-loader
  <li> yarn add -D style-loader utilize caso nao use MiniCss

<br>

  <h2> Para extrair o css utilizamos mini-css-extract-plugin</h2>


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
           }, 
         ]
     }  
</section>
 <h2> Variavel de Producao e desemvolvimento</h2>
   <p> dependencia: </p>
  <li> yarn add -D optimize-css-assets-webpack-plugin
  <li> yarn add -D terser-webpack-plugin 
  <li> yarn add- cross-env

<br>
                    
      * webpackconfig

      const modoDev = process.env.Node_env !== 'production'
      
      * package.json

      "build" : "cross-env NODE_ENV=production webpack"

      * unificação 

          ===== instancia ====
         // unificar arquivos
          const TerserPlugin = require('terser-webpack-plugin')
          const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


          // * unificação config:
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

      
      
      
      
      
      
      
      
      
  
      


