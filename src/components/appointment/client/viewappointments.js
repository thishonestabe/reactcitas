import React from 'react';
import { Card, Avatar, Typography, Space, Row, Col } from 'antd';
import CurrentAppointment from './currentappointment';
import AppointmentHistory from './appoinmenthistory';

const viewAppointments = (props) => {
    const style = {

    };
    const { Text } = Typography;
    return (
        <div className={"viewAppointments"} style={style}>


                <Row justify="space-around">

                    <Col className="gutter-row" span={4}>
                       <CurrentAppointment/>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <AppointmentHistory/>
                    </Col>
                </Row>


        </div>

    )
}

export default viewAppointments
