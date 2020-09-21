import React, { useState } from 'react';
import { useEffect } from 'react';


// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
const usePersistedState = (key, defaultValue) => {
    const [state, setState] = React.useState(
        () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
      );
      useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
      }, [key, state]);
    
    return [state, setState];
};
    

export default usePersistedState;