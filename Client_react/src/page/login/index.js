import React from 'react';
import { Input, Button, Steps, Radio } from 'antd';
import { connect } from 'react-redux'

const Step = Steps.Step;

class NormalLoginForm extends React.Component {
  render() {
    console.log("ffssaa",this.props)
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

const mapStateToProps = state => {
  console.log("dddddd",state)
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(NormalLoginForm);
