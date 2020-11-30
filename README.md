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

所有的灰色图片都使用这个链接 https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image 

所有的头像都使用这个链接 https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image 

站着的蚂蚁人 https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8e459166dd84ed3965c5d9c4f4bf4cd~tplv-k3u1fbpfcp-watermark.image

不要直接写在 Dom 中，请在页面最上方定义变量。

```ts
const BgImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c66e30d15d2490db49471e43393af32~tplv-k3u1fbpfcp-watermark.image';
const AvatarImg =
  'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15aff4461dc24644bda745276d49bd74~tplv-k3u1fbpfcp-watermark.image';
const AntImg =
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8e459166dd84ed3965c5d9c4f4bf4cd~tplv-k3u1fbpfcp-watermark.image';

return (
  <>
    <img src={BgImg} />
  </>
);
```

### block JSON

```bash
CREATE_TEMPLATES_JSON alita build
```

自动生成 `templates.json`
