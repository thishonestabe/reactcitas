import React from 'react';
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

const hourPicker = (props) => {
    const style = {

    };
    return (
        <div className={"hourPicker"} style={style}>
            <Tabs defaultActiveKey="1" tabPosition={"top"} style={{ height: 220 }}>
                {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
                    <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                        Content of tab {i}
                    </TabPane>
                ))}
            </Tabs>
        </div>

    )
}

export default hourPicker
