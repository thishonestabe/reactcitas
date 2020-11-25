import React from 'react';
import { Card, Avatar, Typography, Space, Row, Col } from 'antd';
import CurrentAppointment from './currentappointment';
import AppoinmentHistory from './appoinmenthistory';

const viewAppoinments = (props) => {
    const style = {

    };
    const { Text } = Typography;
    return (
        <div className={"viewAppoinments"} style={style}>

            <Card title="Your Doctor"  style={{ width: '500px' }}>
                <Row justify="space-around">

                    <Col className="gutter-row" span={4}>
                       <CurrentAppointment/>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <AppoinmentHistory/>
                    </Col>
                </Row>

            </Card>
        </div>

    )
}

export default viewAppoinments
