import React from 'react';
import { Input, Button, Form, Icon, Checkbox } from 'antd';
import styles from './index.css';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  render() {
    console.log("pppp",this)
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ textAlign: "center" }}>
        <div className={styles.logoDiv}>
          <span>这里放置LOGO</span>
        </div>
        <div className={styles.mainDiv}>
          <Form>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
          </Form>
        </div>
        <Button type="primary" htmlType="submit" onClick={()=>this.props.onLogin(this.props.form)}>
                登录
        </Button>
      </div>
    );
  }
}



const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
