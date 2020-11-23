import React from 'react';
import './home.css';
import Headerapp from './header';
import SideMenu from '../nav/sidemenu'
import { Layout } from 'antd';
// import CurrentAppointment from '../appointment/client/currentappointment'
import EditAppointment from '../appointment/client/editappointment'
const { Header, Sider, Content } = Layout;
class Home extends React.Component {
    style = {

    };
    state = {
        collapsed: false,
        user: {
            name: 'Abraham',
            id: '0001',
            currentApp: Date.now(),
            token: 'sdjfi'
        }
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
                        <SideMenu user={this.state.user}></SideMenu>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Headerapp></Headerapp>
                        </Header>
                        <Content style={{height: "100vh"}}>
                            <EditAppointment/>
                        </Content>
                    </Layout>


                </Layout>

            </div>

        )
    }
}

export default Home
