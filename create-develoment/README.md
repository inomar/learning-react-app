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
        "targets": "> 0.25%, not np_mini all"
      }
    ]
  ]
}
```
