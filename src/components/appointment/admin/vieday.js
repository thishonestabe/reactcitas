import React from 'react';
import { Calendar, Badge, Table } from 'antd';



const viewDay = (props) => {
    const style = {

    };
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            time: '13:00',
            description: 'Cleaning',
        },
        {
            key: '2',
            name: 'Mike',
            time: '12:00',
            description: 'Follow up',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
    ];

    return (
        <div className={"viewDay"} style={style}>
            <Table dataSource={dataSource} columns={columns} />
        </div>

    )
}

export default viewDay
