# alita templates

## 贡献

### 新建模版

新建空文件夹，执行初始化，修改简介、分类、二级分类、作者等信息。

```bash
mkdir EmptyPage
yarn bootstrap
```

### 启动开发

```bash
yarn start templateName
// 如,此处不区分大小写
yarn start EmptyPage
```

### 魔改的配置

在 package 里面，增加了 `template` 配置，主要是用来设置 `navbar` 和 页面背景色

> 请注意，是在模版目录下的 `package.json` 里面配置，不是在最外层的 `package.json`。

```json
  "template": {
    "navbar": {
      "title": "空白页",
      "backgroundColor": "#FFFFFF",
      "display": "flex",
      "color": "#333333"
    },
    "backgroundColor": "#F5F5F5"
  },
```
