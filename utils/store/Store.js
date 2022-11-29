import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    modalShown: false,
    modalData: {},
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_MODAL_ON':
            return { ...state, modalShown: true, modalData: action.payload };
        case 'SET_MODAL_OFF':
            return { ...state, modalShown: false, modalData: {}};
        default:
            return state;
    }
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>
}