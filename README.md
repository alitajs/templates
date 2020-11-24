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

### 资源

所有的灰色图片都使用这个链接 https://cdn.nlark.com/yuque/0/2020/png/123174/1606203971629-a847138d-dd5d-4e41-81ac-d85565a76f3f.png
所有的头像都使用这个链接 https://cdn.nlark.com/yuque/0/2020/png/123174/1606204045130-a7defa4f-356a-4cfc-a47f-2b14b733b987.png
站着的蚂蚁人 https://cdn.nlark.com/yuque/0/2020/png/123174/1606204069039-659a5ccf-a783-498d-9a66-940ccafc59d3.png

不要直接写在 Dom 中，请在页面最上方定义变量。
```ts

const BgImg = "https://cdn.nlark.com/yuque/0/2020/png/123174/1606203971629-a847138d-dd5d-4e41-81ac-d85565a76f3f.png";
const AvatarImg = "https://cdn.nlark.com/yuque/0/2020/png/123174/1606204045130-a7defa4f-356a-4cfc-a47f-2b14b733b987.png";
const AntImg = "https://cdn.nlark.com/yuque/0/2020/png/123174/1606204069039-659a5ccf-a783-498d-9a66-940ccafc59d3.png";

return (<><img src={BgImg} /></>)
```
