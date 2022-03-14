import React from 'react';
import { Input, AutoComplete } from 'antd';
import {
  EditOutlined,
} from '@ant-design/icons'
import PropTypes from 'prop-types';
const Option = AutoComplete.Option;
import LocaleProvider from '../LocalProvider/index.js';

export default class MockSelect extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      mock: ''
    };
    this.mock = context.Model.__jsonSchemaMock || [];
  }

  static propTypes = {
    schema: PropTypes.object,
    showEdit: PropTypes.func,
    onChange: PropTypes.func
  };

  render() {
    // const children = [];
    const { schema } = this.props;
    const options = this.mock.map((item) => ({ value: item.mock }))

    return (
      <div>
        <AutoComplete
          className="certain-category-search"
          dropdownMatchSelectWidth={false}
          placeholder={LocaleProvider('mock')}
          options={options}
          value={schema.mock ? schema.mock.mock : ''}
          onChange={this.props.onChange}
          disabled={schema.type === 'object' || schema.type === 'array'}
        >
          <Input addonAfter={<EditOutlined type="edit" onClick={(e) => {e.stopPropagation(); this.props.showEdit()}} />} />
        </AutoComplete>
      </div>
    );
  }
}

MockSelect.contextTypes = {
  Model: PropTypes.object
};
