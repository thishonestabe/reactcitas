import React from 'react';
import { Card, Avatar, Typography, Space, Row, Col, Image } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const doctorCard = () => {
    const style = {

    };
    const { Text } = Typography;
    return (
        <div className={"doctorCard"} style={style}>

            <Card title="Your Doctor"  style={{ width: '500px' }}>
                <Row justify="space-around">

                <Col className="gutter-row" span={4}>
                <Avatar
                    size={{ xs: 48, sm: 64, md: 80, lg: 128, xl: 200, xxl: 300 }}
                    src={<Image src="https://image.freepik.com/vector-gratis/doctor-icono-o-avatar-blanco_136162-58.jpg"/>}
                />
                </Col>
                <Col className="gutter-row" span={8}>
                    <Space direction="vertical">
                        <h4>Dr. Polo</h4>
                        <Text type="secondary">General Dentist</Text>
                        <Text type="secondary">Best doctor I have seen in years</Text>
                        <Text type="secondary">Available from: <p>January 11</p></Text>
                        <Text type="secondary">Working hours: <p>10:00 - 20:00</p></Text>

                    </Space>

                </Col>
                </Row>

            </Card>
        </div>

    )
}

export default doctorCard
