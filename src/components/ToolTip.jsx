import React from "react";
export default function ToolTip(props) {
    return <div style={{position: 'absolute', top: props.top + 'px'}}>
        {props.tooltipContents}
    </div>;
}