import React from 'react';
import { Card, Avatar, Typography, Space, Row, Col, Table } from 'antd';


const appointmentHistory = (props) => {
    const style = {

    };
    const data = [
        {
            key: '1',
            date: '01/11/2020',
            time: '12:00',
            description: 'follow up',
            status: 'closed',
        },
        {
            key: '2',
            date: '01/11/2020',
            time: '12:00',
            description: 'follow up',
            status: 'closed',
        },
        {
            key: '3',
            date: '01/11/2020',
            time: '12:00',
            description: 'follow up',
            status: 'closed',
        },
    ];
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',

        },
    ];
    const { Text } = Typography;
    return (
        <div className={"appointmentHistory"} style={style}>

            <Table columns={columns} dataSource={data} />
        </div>

    )
}

export default appointmentHistory
