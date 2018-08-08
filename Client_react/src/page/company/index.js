import React from 'react';
import {
  Form, Input,
  Button, Upload, Icon,
} from 'antd';
import { observer, inject } from "mobx-react";

const FormItem = Form.Item;


@inject(['Student'])
@observer
class Index extends React.Component {
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <Form>
          <FormItem
            {...formItemLayout}
            label="主标题"
          >
            {getFieldDecorator('title', { initialValue: "公司标题" })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="副标题"
          >
            {getFieldDecorator('subtitle', { initialValue: "公司标题" })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="公司logo"
          >
            {getFieldDecorator('logo', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> 上传公司logo
                </Button>
              </Upload>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
;
export default Form.create()(Index);