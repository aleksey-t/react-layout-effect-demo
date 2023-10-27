import React, {createContext, useEffect, useRef, useState} from "react";

import './App.css';
import ButtonWithTooltip from "./components/ButtonWithTooltip";

export const AppContext = createContext({
    appHeight: undefined,
    scrollTop: undefined,
});

function App() {

  const appRef = useRef(null);
  const [appHeight, setAppHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const rect = appRef.current.getBoundingClientRect();
    setAppHeight(rect.height);
    setScrollTop(appRef.current.scrollTop);
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
    <AppContext.Provider value={{
      appHeight,
      scrollTop
    }}>
      <h1>A demo example of React useLayoutEffect hook</h1>
      <ButtonWithTooltip
          tooltipContents={
            <div>
              tooltip
            </div>
          }
          buttonText="Hover to see a tooltip"
      />
      <ButtonWithTooltip
          tooltipContents={
            <div>
              tooltip 2
            </div>
          }
          buttonText="Hover to see a tooltip 2"
      />
      <ButtonWithTooltip
          tooltipContents={
            <div>
              tooltip 3
            </div>
          }
          buttonText="Hover to see a tooltip 3"
      />
    </AppContext.Provider>
  </div>
}

export default App;
