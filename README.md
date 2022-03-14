# json-schema-editor-visual
A json-schema editor of high efficient and easy-to-use, base on React.

![avatar](json-schema-editor-visual.jpg)

## Usage
```
npm install json-schema-editor-visual
```

```js
const option = {}
import 'antd/dist/antd.css'
require('json-schema-editor-visual/dist/main.css')
const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const SchemaEditor = schemaEditor(option)

render(
    <SchemaEditor />,
  document.getElementById('root')
)
```

## Option Object

| name | desc | default |
| ---- | ----------- | --------- |
| `lang` | language, support `en_US` or `zh_CN` | en_US 

## SchemaEditor Props

| name | type | default | desc
| ---- | ----------- | --------- | --------- |
| `data` | string | null | the data of editor
| `onChange`| function | null | 
| `showEditor` | boolean | false | 
| `showTitle` | boolean | true | 

## Links
https://github.com/zyqwst/json-schema-editor-vue

## todo
- [ ] fix: mock 输入框鼠标放在上面时 placeholder 不应消失
- [ ] feat: 在弹窗中支持编辑所有信息
- [ ] feat: 优化 type 为 object 时的样式, 目前此 type 下边距偏大
- [ ] feat: 优化折叠按钮样式, 避免被缩小
- [ ] feat: 优化小屏时的样式
  - [ ] 1200px 时隐藏描述输入框 col-item-desc
  - [ ] 900px 时隐藏 title 输入框 col-item-title
  - [ ] 740px 时隐藏 col-item-mock col-item-type ant-input-group-addon
  