import React from 'react';
import { Table, Tag } from 'antd';



const hourPicker = (props) => {
    const style = {
        width: '100vw'
    };
    const dataSource = [
        {
            key: '1',
            time: '12:00',
            hours1: ['Cool'],
            hours2: ['Looser'],
            hours3: ['Volcano'],
            hours4: ['Developer'],
            hours5: ['nice']
        },
        {
            key: '2',
            time: '13:00',
            hours1: ['Cool2'],
            hours2: ['Looser2'],
            hours3: ['Volcano2'],
            hours4: ['Developer2'],
            hours5: ['nice2']
        },
        {
            key: '3',
            time: '14:00',
            hours1: ['Cool3'],
            hours2: ['Looser3'],
            hours3: ['Volcano3'],
            hours4: ['Developer3'],
            hours5: ['nice3']
        },
        {
            key: '4',
            time: '15:00',
            hours1: ['open'],
            hours2: ['open'],
            hours3: ['open'],
            hours4: ['open'],
            hours5: ['open']
        },
        {
            key: '5',
            time: '16:00',
            hours1: ['Cool5'],
            hours2: ['Looser5'],
            hours3: ['Volcano5'],
            hours4: ['Developer5'],
            hours5: ['nice5']
        },
        {
            key: '6',
            time: '17:00',
            hours1: ['Cool6'],
            hours2: ['Looser6'],
            hours3: ['Volcano6'],
            hours4: ['Developer6'],
            hours5: ['nice6']
        },
        {
            key: '7',
            time: '18:00',
            hours1: ['Cool7'],
            hours2: ['Looser7'],
            hours3: ['Volcano7'],
            hours4: ['Developer7'],
            hours5: ['nice7']
        },
        {
            key: '8',
            time: '19:00',
            hours1: ['Cool8'],
            hours2: ['Looser8'],
            hours3: ['Volcano8'],
            hours4: ['Developer8'],
            hours5: ['nice8']
        },
    ];

    const columns = [
        {
            title: 'Hours',
            dataIndex: 'time',
            key: 'time',
            fixed: true,
            width: 100

        },
        {
            title: 'Monday 01',
            dataIndex: 'hours1',
            key: 'hours1',
            render: hours1 => (
                <>
                    {hours1.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'red';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        if (tag === 'open') {
                            color = 'green'
                            return (
                                <Tag color={color} key={tag}>
                                    <a>{tag.toUpperCase()}</a>
                                </Tag>
                            );
                        } else {
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        }

                    })}
                </>
            ),
        },
        {
            title: 'Tuesday 02',
            dataIndex: 'hours2',
            key: 'hours2',
            render: hours2 => (
                <>
                    {hours2.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'red';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        if (tag === 'open') {
                            color = 'green'
                            return (
                                <Tag color={color} key={tag}>
                                    <a>{tag.toUpperCase()}</a>
                                </Tag>
                            );
                        } else {
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        }

                    })}
                </>
            ),
        },
        {
            title: 'Wednesday 03',
            dataIndex: 'hours3',
            key: 'hours3',
            render: hours3 => (
                <>
                    {hours3.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'red';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        if (tag === 'open') {
                            color = 'green'
                            return (
                                <Tag color={color} key={tag}>
                                    <a>{tag.toUpperCase()}</a>
                                </Tag>
                            );
                        } else {
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        }

                    })}
                </>
            ),
        },
        {
            title: 'Thursday 04',
            dataIndex: 'hours4',
            key: 'hours4',
            render: hours4 => (
                <>
                    {hours4.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'red';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        if (tag === 'open') {
                            color = 'green'
                            return (
                                <Tag color={color} key={tag}>
                                    <a>{tag.toUpperCase()}</a>
                                </Tag>
                            );
                        } else {
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        }

                    })}
                </>
            ),
        },
        {
            title: 'Friday 05',
            dataIndex: 'hours5',
            key: 'hours5',
            render: hours5 => (
                <>
                    {hours5.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'red';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        if (tag === 'open') {
                            color = 'green'
                            return (
                                <Tag color={color} key={tag}>
                                    <a>{tag.toUpperCase()}</a>
                                </Tag>
                            );
                        } else {
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        }

                    })}
                </>
            ),
        },
    ];
    return (
        <div className={"hourPicker"} style={style}>
            <Table pagination={false} dataSource={dataSource} scroll={{ x: 2000 }} columns={columns} />
        </div>

    )
}

export default hourPicker
