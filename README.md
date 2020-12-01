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

### 截图

```bash
yarn screenshot
```

只执行某一个页面的截图，如更新截图或者是新增页面开发完成时，

```bash
yarn screenshot --path abcpage // 此处忽略文件名大小写
```

### 测试

修改后的代码，会执行截图，与原来的截图，比对，如果页面有修改，请先更新页面截图，如果修改后的页面与原来的页面不同，会报错，并且在模版目录下生成 `diff.png` 文件。

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
