import { City } from '../interfaces/interfaces';

export type State = {
    cities: City[],
    darkMode: boolean,
}

export enum actionsList {
    GET_LOCAL_STORAGE = 'GET LOCAL STORAGE',
    ADD_CITY = 'ADD CITY',
    REMOVE_CITY = 'REMOVE CITY',
    CHANGE_MODE = 'CHANGE MODE',
}

export type actionsTypes = 
    | { type: actionsList.GET_LOCAL_STORAGE }
    | { type: actionsList.ADD_CITY, payload: City }
    | { type: actionsList.REMOVE_CITY, payload: number }
    | { type: actionsList.CHANGE_MODE }

export default function StoreReducer(state: State, action: actionsTypes): State {
    switch (action.type) {
        case actionsList.GET_LOCAL_STORAGE:
            let getState = localStorage.getItem('weather')
            let stateParse = typeof getState === 'string' ? JSON.parse(getState) : state
            return {
                ...state,
                cities: stateParse.cities,
                darkMode: stateParse.darkMode
            }
        case actionsList.ADD_CITY:
            let repet = state.cities.find((city) => city.id === action.payload.id)
            !repet && localStorage.setItem('weather', JSON.stringify({...state, cities:[...state.cities, action.payload]}));
            return {
                ...state,
                cities: repet ? state.cities : [...state.cities, action.payload]
            }
        case actionsList.REMOVE_CITY:
            localStorage.setItem('weather', JSON.stringify({...state, cities: state.cities.filter((city) => city.id !== action.payload)}))
            return {
                ...state,
                cities: state.cities.filter((city) => city.id !== action.payload)
            }
        case actionsList.CHANGE_MODE:
            localStorage.setItem('weather', JSON.stringify({...state, darkMode: !state.darkMode}));
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state
    }
}