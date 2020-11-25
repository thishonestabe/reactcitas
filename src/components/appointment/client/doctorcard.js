import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const doctorCard = () => {
    const style = {

    };
    const { Text, Link } = Typography;
    return (
        <div className={"doctorCard"} style={style}>
            <h4>Your Doctor</h4>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <div>
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<AntDesignOutlined />}
                />
                </div>
                <div>
                    <Space direction="vertical">
                        <h4>Dr. Polo</h4>
                        <Text type="secondary">General Dentist</Text>
                        <Text type="secondary">Best doctor I have seen in years</Text>
                        <Text type="secondary">Available from: <p>January 11</p></Text>
                        <Text type="secondary">Working hours: <p>10:00 - 20:00</p></Text>

                    </Space>

                </div>

            </Card>
        </div>

    )
}

export default doctorCard
