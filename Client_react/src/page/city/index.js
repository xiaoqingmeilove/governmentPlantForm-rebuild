import React from 'react';
import styles from './index.css'
import { Tag, Form, Row, Col, Input, Button, Modal, Table } from 'antd';
import { observer, inject } from "mobx-react";
import { observable, action, computed, autorun } from "mobx";

const CheckableTag = Tag.CheckableTag;
const { TextArea } = Input;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
};

@inject(['City'])
@observer
class Index extends React.Component {
    render() {
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
                    <div style={{ marginBottom: "20px" }}>
                        <span className={styles.cityName}>新增城市：</span>
                        <Input className={styles.cityNameInput} id="cityInput"></Input>
                        <Button
                            style={{ marginLeft: "20px" }}
                            onClick={() => {
                                this.props.City.changeList(document.getElementById("cityInput").value, "add")
                            }}
                        >
                            确定
                        </Button>
                    </div>
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
                        <Button
                            style={{ marginLeft: "20px" }}
                            onClick={() => {
                                this.props.City.changeForm(this.props.form)
                            }}
                        >
                            确定修改
                        </Button>
                        <Button
                            type='danger'
                            style={{ marginLeft: "20px" }}
                            onClick={() => {
                                this.props.City.changeList(document.getElementById("cityInput").value, "add")
                            }}
                        >
                            删除城市
                        </Button>
                        <Form

                        >
                            <Row gutter={24} style={{ marginTop: "15px" }}>
                                <Col span={24} key={"city"} >
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
                                <Col span={24} key={"token"} >
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
                                            <Input placeholder="主平台收到消息时向此地址广播" />
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
                        <Button
                            type="primary"
                            style={{ marginBottom: "20px", marginTop: "40px" }}
                            onClick={() => {
                                this.props.City.changeAll({
                                    modelVisible: true
                                })
                            }}
                        >
                            新增变量
                        </Button>
                        <Table dataSource={[]} columns={columns} />
                        <Modal
                            title="Basic Modal"
                            visible={this.props.City.modelVisible}
                            onOk={() => {
                                this.props.City.changeAll({
                                    modelVisible: false
                                })
                            }}
                            onCancel={() => {
                                this.props.City.changeAll({
                                    modelVisible: false
                                })
                            }}
                        >
                            <Form>
                                <Row gutter={24} style={{ marginTop: "15px" }}>
                                    <Col span={24} key={"keyName"} >
                                        <FormItem label={"变量名称"} {...formItemLayout}>
                                            {getFieldDecorator("keyName", {
                                                rules: [{
                                                    required: true,
                                                    message: '请填写变量名称',
                                                }],
                                            })(
                                                <Input placeholder="变量名称" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={24} key={"keyDescription"} >
                                        <FormItem label={"注释"} {...formItemLayout}>
                                            {getFieldDecorator("keyDescription", {
                                                
                                            })(
                                                <Input placeholder="注释" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={24} key={"keyValue"} >
                                        <FormItem label={"变量详情"} {...formItemLayout}>
                                            {getFieldDecorator("keyValue", {
                                                rules: [{
                                                    required: true,
                                                    message: '请填写变量详情',
                                                }],
                                            })(
                                                <TextArea rows={4} placeholder="变量详情" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
;
export default Form.create()(Index);