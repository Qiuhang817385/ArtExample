import React, { Component } from 'react'
import { Row, Button, Col, Select, Input, Form, InputNumber } from 'antd';
import './ConfigurableForm.scss'
const FormItem = Form.Item;
const Option = Select.Option;
const formRef = React.createRef();
export default class ConfigurableForm extends Component {
  // 以及Select, Input,InputNumber组件实现⼀个可配置表单组件ConfigurableForm
  constructor(props) {
    super(props)
  }
  onFinish = (fieldsValue) => {
    console.log('fieldsValue', fieldsValue)
    // 调用父组件的onSubmit
    this.props.onSubmit(fieldsValue);
  }
  render () {
    const { config, layout } = this.props;
    console.log('layout', layout);
    /**
     * 生成布局
     */
    const renderWrap = (data) => {
      return data.map((row, index) => {
        if (Array.isArray(row)) {
          return (
            <Row className="row" key={row}>{renderWrap(row)}</Row>
          )
        }
        return (<Col className="col" span={12} key={row}>{generatorForm(config[row])}</Col>)
      })
    }
    return (
      <div>
        <Form ref={formRef} onFinish={this.onFinish}>
          {renderWrap(layout)}
          <Button type="primary" htmlType="submit" style={{ marginLeft: '30px' }}>
            submit提交按钮
            </Button>
        </Form>
      </div>
    )
  }
}
/**
 * 生成Option选项
 */
const getOptionList = (data) => {
  console.log('data', data);
  if (!data) {
    return [];
  }
  let options = [] //[<Option value="0" key="all_key">全部</Option>];
  data.forEach((item) => {
    options.push(<Option value={item.value} key={item.value}>{item.text}</Option>)
  })
  return options;
}
/**
 * 数字输入框回调
 */
const onChange = (value) => {
  console.log('changed', value);
}
const generatorForm = (params) => {
  // 字段名、要生成的类型
  const { fieldName, type } = params;
  let formEle = {
    'select': <FormItem name={fieldName} label={fieldName}>
      <Select>
        {getOptionList(params.options)}</Select>
    </FormItem>,
    'input': <FormItem name={fieldName} label={fieldName}>
      <Input type={type}></Input>
    </FormItem>,
    'number': <FormItem name={fieldName} label={fieldName}>
      <InputNumber min={params.min} max={params.max} onChange={onChange} />
    </FormItem>
  }
  return formEle[type]
}