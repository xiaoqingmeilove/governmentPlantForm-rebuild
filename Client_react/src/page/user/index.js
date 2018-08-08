import React from 'react';
import { Table, Modal } from 'antd';
import { observer, inject } from "mobx-react";
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

@inject(['User'])
@observer
class Index extends React.Component {

    render() {
        return (
            <div>
                <h1>这里是人员修改</h1>
                <Table dataSource={dataSource} columns={columns}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                this.props.User.changeAll({
                                    modelVisible: true
                                })
                            },
                        };
                    }}
                />
                <Modal
                    title="Basic Modal"
                    visible={this.props.User.modelVisible}
                    onOk={() => {
                        this.props.User.changeAll({
                            modelVisible: false
                        })
                    }}
                    onCancel={() => {
                        this.props.User.changeAll({
                            modelVisible: false
                        })
                    }}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}
;
export default Index;