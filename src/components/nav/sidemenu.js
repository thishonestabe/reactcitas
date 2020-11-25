import React from 'react';
import './sidemenu.css'

import { Menu, Button } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class SideMenu extends React.Component {
    style = {
        width: '100%'
    };
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    menuFolded = this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;



    render() {
        return (
            <div className={"sideMenu"} style={this.style}>
                <div style={{height: "60px", color: 'white'}}>Welcome {this.props.user.name}</div>
                <Menu theme={"dark"} defaultSelectedKeys={['1']} mode={"inline"}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Appointments
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                        Admin
                    </Menu.Item>

                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </div>
        );
    };
}
export default SideMenu;
