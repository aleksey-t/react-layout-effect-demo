import React from "react";
import ToolTip from "./ToolTip";

export default function ButtonWithTooltip(props) {
    const [targetBoundingRect, setTargetBoundingRect] = React.useState(null);
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
    const buttonRef = React.useRef(null);

    function handlePointerEnter() {
        const buttonBoundingRect = buttonRef.current.getBoundingClientRect();
        setIsTooltipVisible(true);
        setTargetBoundingRect(buttonBoundingRect);
    }

    function handlePointerOut() {
        setIsTooltipVisible(false);
    }

    return <span style={{position: 'relative', display: 'flex', flexDirection:'column'}}>
                <button
                    ref={buttonRef}
                    onPointerEnter={handlePointerEnter}
                    onPointerOut={handlePointerOut}
                >
                    Hover to see a tooltip
                </button>
        {
            isTooltipVisible ? <ToolTip
                tooltipContents={props.tooltipContents}
                targetBoundingRect={targetBoundingRect}
            /> : ''
        }
        </span>;
}
