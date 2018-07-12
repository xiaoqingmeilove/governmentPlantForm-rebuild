const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env,args)=>{
    return {
        context:path.resolve(__dirname,'src'),
        entry:()=>path.resolve(__dirname,'src/index.js'),
        output:{
            filename:'bundle.[hash].js',
            path:path.resolve(__dirname,'dist'),
            publicPath:''
        },
        module:{
            rules:[{
                test:/\.jsx?$/,
                include:[path.resolve(__dirname,'src')],
                exclude:[path.resolve(__dirname,'node_modules')],
                enforce:'pre',
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','react','stage-0'],
                        plugins:[
                            ["import",{"libraryName": "antd","style": "css"}]
                        ]
                    }
                }]
            },{
                test:/\.css$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                }]
            },{
                test:/\.less$/,
                use:[{
                    loader:'less-loader'
                }]
            },{
                test:/\.(jpg|gif|png)/,
                use:[{
                       loader:'url-loader',
                       options:{
                        limits:3400
                       }
                }]
            }]
        },
        resolve:{
                modules : [path.resolve(__dirname,'node_modules'),path.resolve(__dirname,'src')],
                extensions:['.js','.json','.jsx']
        },
        devtool : "eval-source-map",
        devServer:{
            hot : true,
            contentBase:path.join(__dirname,'src'),
            compress:true,
            historyApiFallback:true,
            inline :true
        },
        plugins:[
            new HtmlWebpackPlugin({
                    hot: true,
                    lazy: true,
                    inject:'body',
                            hash:true,
                    template: path.resolve(__dirname,"src/index.html")
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.AggressiveMergingPlugin()
         ]   
    }
}