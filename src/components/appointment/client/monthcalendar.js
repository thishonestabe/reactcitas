import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

const monthCalendar = (props) => {
    const style = {
        width: "300px",
        border: "1px solid #f0f0f0",
        borderRadius: "2px",
    };
    return (
        <div className={"monthCalendar"} style={style}>
            <div className="site-calendar-demo-card" style={style}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>,
        </div>

    )
}

export default monthCalendar
