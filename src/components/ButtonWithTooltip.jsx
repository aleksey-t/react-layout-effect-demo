import React from "react";
import {AppContext} from "../App";
import ToolTip from "./ToolTip";

export default function ButtonWithTooltip(props) {
    const [top, setTop] = React.useState(0);
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
    const ref = React.useRef(null);
    const {
        appHeight,
        scrollTop
    } = React.useContext(AppContext);

    function handlePointerEnter() {
        const boundingRect = ref.current.getBoundingClientRect();
        console.log('boundingRect', boundingRect);
        setIsTooltipVisible(true);

        console.log('appHeight', appHeight)
        console.log('scrollTop', scrollTop)
    }

    function handlePointerOut() {
        const boundingRect = ref.current.getBoundingClientRect();
        console.log('boundingRect', boundingRect);
        setIsTooltipVisible(false);
    }

    React.useEffect(() => {
        const boundingRect = ref.current.getBoundingClientRect();

        setTop(boundingRect.y);


    }, [appHeight, scrollTop]);

    return <span style={{position: 'relative'}}>
            <div
                style={{
                    height: '140px',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
                ref={ref}
            >
                <button
                    ref={ref}
                    onPointerEnter={handlePointerEnter}
                    onPointerOut={handlePointerOut}
                >
                    Hover to see a tooltip
                </button>
            </div>
        {
            isTooltipVisible ? <ToolTip
                tooltipContents={props.tooltipContents}
                top={top}
            /> : ''
        }
        </span>;
}
