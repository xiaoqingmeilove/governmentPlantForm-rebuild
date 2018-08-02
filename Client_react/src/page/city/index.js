import React from 'react';
import styles from './index.css'
import { Tag, Form, Row, Col, Input, Button, Modal, Table } from 'antd';
import { observer, inject } from "mobx-react";
import { observable, action, computed, autorun } from "mobx";

const CheckableTag = Tag.CheckableTag;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};

@inject(['City'])
@observer
class Index extends React.Component {
    render() {
        console.log("hhhhhh", this)
        const columns = [{
            title: '变量名称',
            dataIndex: 'keyName',
            key: 'keyName',
          }, {
            title: '变量详细信息',
            dataIndex: 'keyValue',
            key: 'keyValue',
          }, {
            title: '注释',
            dataIndex: 'description',
            key: 'description',
          }];
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div>
                    <span className={styles.cityName}>现有城市：</span>
                    <div className={styles.cityNameList}>
                        {
                            this.props.City.cityNamelist.map(item => {
                                return (
                                    <CheckableTag
                                        key={item}
                                        checked={this.props.City.cityNamelist_select == item ? true : false}
                                        onChange={checked => this.props.City.changeSelect(item, checked)}
                                    >
                                        {item}
                                    </CheckableTag>
                                )
                            })
                        }
                    </div>
                    <div className={styles.formList}>
                        <span className={styles.formName}>详细信息：</span>
                        <Form

                        >
                            <Row gutter={24} style={{ marginTop: "15px" }}>
                                <Col span={12} key={"city"} >
                                    <FormItem label={"城市"} {...formItemLayout}>
                                        {getFieldDecorator("city", {
                                            rules: [{
                                                required: true,
                                                message: '请填写城市',
                                            }],
                                        })(
                                            <Input placeholder="城市名称" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12} key={"token"} >
                                    <FormItem label={"token"} {...formItemLayout}>
                                        {getFieldDecorator("token", {

                                        })(
                                            <Input placeholder="同步所需token" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={24} key={"broadcastAddress"} >
                                    <FormItem label={"广播发往地址"} {...formItemLayout}>
                                        {getFieldDecorator("broadcastAddress", {

                                        })(
                                            <Input placeholder="主平台收到 消息时向此地址广播" />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={24} key={"govplantAddress"} >
                                    <FormItem label={"政府平台地址"} {...formItemLayout}>
                                        {getFieldDecorator("govplantAddress", {

                                        })(
                                            <Input placeholder="政府平台最终接收的地址" />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                        <Button type="primary" style={{marginBottom:"20px",marginTop:"40px"}}>新增变量</Button>
                        <Table dataSource={[]} columns={columns} />

                    </div>
                </div>
            </div>
        );
    }
}
;
export default Form.create()(Index);