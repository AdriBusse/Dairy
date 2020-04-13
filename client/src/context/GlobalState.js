import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


const initialState={
    days:[
        {day: "1 April", ereigniss:["wake up", "go to school", "programming"]},
        {day: "2 April", ereigniss:["lunch", "study", "sport"]},
        {day: "3 April", ereigniss:["wake up", "swimm", "meet friends"]},
        {day: "4 April", ereigniss:["wake up", "go to school", "walking"]},
        {day: "5 April", ereigniss:["wake up", "university", "party"]}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

        return (
            <GlobalContext.Provider
                value={{
                days: state.days,

            }}>
                {children}
            </GlobalContext.Provider>
        )
}