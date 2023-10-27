import React, {useContext, useLayoutEffect, useRef, useState} from "react";
import {AppContext} from "../App";

export default function ToolTip(props) {
    const tooltipRef = useRef(null);
    const appBoundingRect = useContext(AppContext);
    const [offsetY, setOffsetY] = useState(0);

    useLayoutEffect(() => {
        if (props.targetBoundingRect && appBoundingRect) {
            const tooltipHeight = tooltipRef.current.getBoundingClientRect().height;

            if (props.targetBoundingRect.top - appBoundingRect.top - tooltipHeight <= 0) {
                setOffsetY(props.targetBoundingRect.height);
            } else {
                setOffsetY(-tooltipHeight);
            }
        }
    }, [appBoundingRect, props.targetBoundingRect]);


    return <div
        ref={tooltipRef}
        style={{
            position: 'absolute',
            top: 0,
            transform: `translate3d(0, ${offsetY}px, 0)`
        }}>
        {props.tooltipContents}
    </div>;
}