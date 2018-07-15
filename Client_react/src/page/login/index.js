import React from 'react';
import { Input, Button, Steps, Radio } from 'antd';

const Step = Steps.Step;

class NormalLoginForm extends React.Component {
  
  render() {
    return (
      <div>
        <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps>
        <Radio>Radio</Radio>
        <h1>登录界面</h1>
      </div>
    );
  }
}
;
export default NormalLoginForm;
