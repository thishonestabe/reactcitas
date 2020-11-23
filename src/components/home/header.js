import React from 'react';
import { PageHeader } from 'antd';
const header = (props) => {
    const style = {

    };
    return (
        <div className={"Header"} style={style}>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            />
        </div>

    )
}

export default header
