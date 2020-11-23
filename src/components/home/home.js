import React from 'react';
import './home.css';
import Headerapp from './header';
import SideMenu from '../nav/sidemenu'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
class Home extends React.Component {
    style = {

    };
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <div className={"Home"} style={this.style}>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <SideMenu></SideMenu>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Headerapp></Headerapp>
                        </Header>
                        <Content>
                            Content
                        </Content>
                    </Layout>


                </Layout>

            </div>

        )
    }
}

export default Home
