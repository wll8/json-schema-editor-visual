import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

import '../dist/main.css'
// const jeditor = require('../dist/main');
const jeditor = require('../package/index.js');
const mock = [
  { name: '字符串', mock: '@string' },
  { name: '自然数', mock: '@natural' },
  { name: '浮点数', mock: '@float' },
  { name: '字符', mock: '@character' },
  { name: '布尔', mock: '@boolean' },
  { name: 'url', mock: '@url' },
  { name: '域名', mock: '@domain' },
  { name: 'ip地址', mock: '@ip' },
  { name: 'id', mock: '@id' },
  { name: 'guid', mock: '@guid' },
  { name: '当前时间', mock: '@now' },
  { name: '时间戳', mock: '@timestamp' }
];

const JEditor1 = jeditor({mock: mock});
const data = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "books": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "user": {
            "type": "string"
          },
          "view": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "discount": {
            "type": "string"
          },
          "author": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              }
            }
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "user",
          "view",
          "type",
          "discount",
          "author",
          "title"
        ]
      }
    }
  }
}

render(
  <div>
    <JEditor1
      showEditor={true}
      isMock={true}
      data={JSON.stringify(data)}
      onChange={e => {
        console.log('changeValue', e);
      }}
    />

    {/* <JEditor2
      showEditor={true}
      data={null}
      onChange={e => {
        // console.log("changeValue", e);
      }}
    /> */}
  </div>,
  document.getElementById('root')
);
