const path = require('path')
// webpackモジュールを読み込み
const webpack = require('webpack');

// html-webpack-pluginモジュールを読み込む
const htmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  // developmentモードで実行
  mode: 'development',
  devServer: {
    contentBase: dist, // 開発サーバーを立ち上げる参照ディレクトリ
    hot: true, // hot-reloadを有効
    port: 4000 // サーバーを立ち上げるポート

  },
  entry: path.resolve(src, 'js/index.js'),
  output: {
    // 生成されるファイル名
    filename: 'indexbundle.js',
    // 生成先ディレクトリ
    path: dist
  },
  resolve: {
    // import分のパスしていにnode_modulesを省略できるようにする
    modules: ['node_modules'],
    // .js, .jsxの拡張子を省略できるようにする
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_,modules/,
        enforce: 'pre', // babel-loaderよりも前に実行される
        loader: 'eslint-loader'
      },
      {
        // ルールを定期要するファイルの正規表現
        test: /\.(js|jsx)$/,

        // node_modules以下のファイルには適用しない
        exclude: /node_modules/,

        // 使用するloader
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // hot-reloadを有効にするプラグインを追加
    new webpack.HotModuleReplacementPlugin(),

    // HtmlWebpackPluginプラグインを追加
    new htmlWebpackPlugin()
  ],
  // sourceMappingの設定
  devtool: 'cheap-module-eval-source-map'
}