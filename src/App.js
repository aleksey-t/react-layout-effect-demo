import React, {createContext, useEffect, useRef, useState} from "react";

import './App.css';
import ButtonWithTooltip from "./components/ButtonWithTooltip";

export const AppContext = createContext(null);

function App() {
    const appRef = useRef(null);
    const [appBoundingRect, setAppBoundingRect] = useState();

    useEffect(() => {
        setAppBoundingRect(appRef.current.getBoundingClientRect())
    }, []);

    return <div
        style={{
            width: '400px',
            height: '300px',
            border: 'solid 1px grey',
            padding: '10px',
            margin: '50px',
            overflow: 'auto',
        }}
        ref={appRef}
    >
        <AppContext.Provider value={appBoundingRect}>
            <h1>A demo example of React useLayoutEffect hook</h1>
            <ul>
                <li className="card">
                    <ButtonWithTooltip
                        tooltipContents={
                            <div>
                                tooltip
                            </div>
                        }
                        buttonText="Hover to see a tooltip"
                    />
                </li>
                <li className="card">
                    <ButtonWithTooltip
                        tooltipContents={
                            <div>
                                tooltip 2
                            </div>
                        }
                        buttonText="Hover to see a tooltip 2"
                    />
                </li>
                <li className="card">
                    <ButtonWithTooltip
                        tooltipContents={
                            <div>
                                tooltip 3
                            </div>
                        }
                        buttonText="Hover to see a tooltip 3"
                    />
                </li>
            </ul>
        </AppContext.Provider>
    </div>
}

export default App;
