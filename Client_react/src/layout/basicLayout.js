import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Loadable from 'react-loadable';
import styles from './bacsicLayout.css';

const { Header, Content, Footer, Sider } = Layout;

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>正在加载中...</div>;
  }
  else if (error) {
    return <div>抱歉, 该页面出现错误,请稍后再试</div>;
  }
  else {
    return null;
  }
};

class Index extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  makeRoute = (children) => {
    var result = []
    let self = this
    function inside(children) {
      for (let i = 0; i < children.length; i++) {
        let Temp = Loadable({
          loader: () => import(`../page/${children[i].componentPath}`),
          loading: MyLoadingComponent
        });
        result.push(<Route
          path={children[i].path}
          key={children[i].path}
          component={Temp}
          exact={true}
        />)
        if (children[i].children) {
          inside(children[i].children)
        }
      }
    }
    inside(children)
    return result
  }



  render() {
    const children = this.props.children
    return (
      <Layout className={styles.mainDiv}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" >这里放logo</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">用户管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">地区管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">电梯在线管理</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">电梯批量登记</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
              <Switch>
                {this.makeRoute(children)}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            这里是底部
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
;
export default Index;

