import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Loadable from 'react-loadable';
import styles from './bacsicLayout.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

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

  makeBread = (children) => {
    var breadcrumbNameMap = {}
    function inside(children) {
      for (let i = 0; i < children.length; i++) {
        breadcrumbNameMap[children[i].path] = children[i].name
        if (children[i].children) {
          inside(children[i].children)
        }
      }
    }
    inside(children)
    return breadcrumbNameMap
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
          exact
        />)
        if (children[i].children) {
          inside(children[i].children)
        }
      }
    }
    inside(children)
    return result
  }

  makeMenu = (menuArr) => {
    return menuArr.map(item => {
      if (item.children) {
        return <SubMenu key={item.path} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
          {this.makeMenu(item.children)}
        </SubMenu>
      }
      return (
      <Menu.Item key={item.path}>
        <Link to={item.path}>
          <Icon type="user" />
          <span>{item.name}</span>
        </Link>
      </Menu.Item>
      )
    })
  }

  render() {
    const children = this.props.children
    const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      var breadcrumbNameMap = this.makeBread(children)
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      if(breadcrumbNameMap[url]){
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>
              {breadcrumbNameMap[url]}
            </Link>
          </Breadcrumb.Item>
        );
      }else{
        return null
      }
      
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <span>首页</span>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
      <Layout className={styles.mainDiv}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" >这里放logo</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
            {this.makeMenu(children)}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumbItems}
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

