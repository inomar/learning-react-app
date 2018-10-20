### babel/preset-env

```bash
$ yarn add --dev @babel/preset-env
```
@babel/preset-envは自動的にトランスパイルをおこなてくれるモジュール
ターゲットブラウザーも指定できる(古いブラウザに対応するとファイルサイズも大きくなるため)
以下設定(Opera miniを除いた0.25%より大きいブラウザシェアを持つブラウザに対応)

```.babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not op_mini all"
      }
    ]
  ]
}
```

### webpack

```bash
$ yarn add --dev webpack webpack-cli @babel/core babel-loader
```

```webpack.config.js
const path = require('path')

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  // developmentモードで実行 => ? TODO
  mode: 'development',
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
        // ルールを定期要するファイルの正規表現
        test: /\.(js|jsx)$/,

        // node_modules以下のファイルには適用しない
        exclude: /node_modules/,

        // 使用するloader
        loader: 'babel-loader'
      }
    ]
  },
  // sourceMappingの設定 => ? TODO
  devtool: 'cheap-module-eval-source-map'
}

```

```package.json
// 追加
"scripts": {
  "build:dev": "webpack --config webpack.config.js"
}
```

```bash
$ yarn build:dev
```

### webpack-dev-server

```bash
$ yarn add --dev webpack-dev-server html-webpack-plugin
```

```webpack.config.js
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
```

```package.json
// scriptsに追加
"server": "webpack-dev-server --open --config webpack.config.js"
```

```bash
$ yarn server
```

### ESLint

ESLintの依存関係を確認
```bash
$ yarn info eslint-config-airbnb peerDependencies

yarn info v1.7.0
{ eslint: '^4.19.1 || ^5.3.0',
  'eslint-plugin-import': '^2.14.0',
  'eslint-plugin-jsx-a11y': '^6.1.1',
  'eslint-plugin-react': '^7.11.0' }
✨  Done in 0.16s.

```

```bash
$ yarn add --dev eslint-config-airbnb eslint@^5.3.0 eslint-plugin-import@^2.14.0 eslint-plugin-jsx-a11y@^6.1.1 eslint-plugin-react@^7.11.0 babel-eslint
```


```.eslintrc
{
  "extends": ["airbnb"], # airbnbのルールを継承
  "env": {
    "browser": true, # ブラウザのグローバル変数を有効化
    "es6": true # es6の構文を有効化
  },
  "parser": "babel-eslint", # babel-eslintをパーサとして使用
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true # jsxを有効
    }
  }
}
```

```pacakge.json
# scriptsに追加
"lint:js": "eslint './src/js/*.{js,jsx}'"
```

#### build毎にeslintを実行

```bash
$ yarn add --dev eslint-loader
```

```webpack.config.js
{
  module: {
    roles [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_,modules/,
        enforce: 'pre', // babel-loaderよりも前に実行される
        loader: 'eslint-loader'
      },
      ...
    ]
  }
}

```

```bash
$ yarn server
```

エラーがある場合はコンパイルエラーになる

### Prettier
Prettierはコードフォーマッタ(js,jsx,css)

```bash
$ yarn add --dev prettier
```

```.prettierrc
{
  "printWidth": 100, # 1行あたりの最大文字数
  "singleQuote": true # ダブルクウォート->シングル
}
```

```package.json
# scriptsに追加
+ "prettier": "prettier --write './src/js/*.{js,jsx}'"
```