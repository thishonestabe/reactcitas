import React from 'react';
import MonthCalendar from './monthcalendar';
import HourPicker from './hourpicker'

const editAppointment = (props) => {
    const style = {

    };
    return (
        <div className={"editAppointment"} style={style}>

            <MonthCalendar/>

            <HourPicker></HourPicker>

        </div>

    )
}

export default editAppointment
