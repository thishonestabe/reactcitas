import React from 'react';
import { Row, Col, Divider } from 'antd';
import MonthCalendar from './monthcalendar';
import HourPicker from './hourpicker'
import DoctorCard from './doctorcard'
const editAppointment = (props) => {
    const styleRow = {
        width: '100%'
    };
    const style = {}
    return (
        <div className={"editAppointment"} style={style}>
            <Divider orientation="left">Select a Date</Divider>
            <Row gutter={16} style={styleRow} justify="space-around">
                <Col className="gutter-row" span={6}>
                    <DoctorCard />
                </Col>
                <Col className="gutter-row" span={6}>
                    <MonthCalendar/>
                </Col>
            </Row>
            <Divider orientation="left">Select an Hour</Divider>
            <Row gutter={16} style={styleRow}>
                <Col className="gutter-row" span={12}>
                    <HourPicker/>
                </Col>
            </Row>

        </div>

    )
}

export default editAppointment
