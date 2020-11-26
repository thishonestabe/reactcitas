import React from 'react';
import './home.css';
import Headerapp from './header';
import SideMenu from '../nav/sidemenu'
import { Layout } from 'antd';
import { Route } from 'react-router-dom'
import CurrentAppointment from '../appointment/client/currentappointment'
import EditAppointment from '../appointment/client/editappointment'
import ViewAppointments from '../appointment/client/viewappointments';
import Admin from '../appointment/admin/clientappointments'
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
                        <SideMenu user={this.state.user}/>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Headerapp/>
                        </Header>
                        <Content style={{height: "100vh"}}>

                            <Route path={"/home"} exact component={ViewAppointments}/>
                            <Route path={"/editAppointment"} exact component={EditAppointment}/>
                            <Route path={"/admin"} exact component={Admin}/>
                        </Content>
                    </Layout>


                </Layout>

            </div>

        )
    }
}

export default Home
