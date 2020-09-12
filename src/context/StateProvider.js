import React, {createContext ,useContext, useReducer} from 'react';

// Preaper the data layer
export const StateContext = createContext();

// Wrap our app and provid the data layer
export const StateProvider = ({reducer, initialState, children}) => {
   return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

// Pull information from dara layer
export const useStateValue = () => useContext(StateContext)