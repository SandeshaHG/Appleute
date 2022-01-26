/*
    ----- This is the Global Context in which the entire Quiz application is wrapped in -----
*/

import { createContext, useReducer } from "react";
import reducer from "./reducer";
const GlobalContext = createContext()



const GlobalState = ({children}) => {

const initialState = {
    completed : 0,
    screen : 'landing-page',
    data : [],
    result : undefined,
    answered : {}
}
const [state, dispatch] = useReducer(reducer,initialState)
return (

    <GlobalContext.Provider value={{state,dispatch}}>
        {children}
    </GlobalContext.Provider>

)}

export  {GlobalState, GlobalContext}