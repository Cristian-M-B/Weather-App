import { City } from '../interfaces/interfaces';

export type State = {
    cities: City[]
}

export enum actionsList {
    ADD_CITY = 'ADD CITY',
    REMOVE_CITY = 'REMOVE CITY'
}

export type actionsTypes = 
    | { type: actionsList.ADD_CITY, payload: City }
    | { type: actionsList.REMOVE_CITY, payload: string }

export default function StoreReducer(state: State, action: actionsTypes): State {
    switch (action.type) {
        case actionsList.ADD_CITY:
            let repet = state.cities.find((city) => city.id === action.payload.id)
            return {
                ...state,
                cities: repet ? state.cities : [...state.cities, action.payload]
            }
        case actionsList.REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter((city) => city.id !== action.payload)
            }
        default:
            return state
    }
}