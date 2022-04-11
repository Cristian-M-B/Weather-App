import { createContext, useContext, useReducer } from "react";
import StoreReducer, { actionsTypes, State } from "./StoreReducer";

const initialState: State = {
    cities: []
}

type StateContextProps = {
    store: State;
    dispatch: React.Dispatch<actionsTypes>
}

const StoreContext = createContext<StateContextProps>({} as StateContextProps);

export const useStore = () => {
    const { store } = useContext(StoreContext);
    return store;
}
export const useDispatch = () => {
    const { dispatch } = useContext(StoreContext);
    return dispatch;
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function StoreProvider({ children }: Props) {
    const [store, dispatch] = useReducer(StoreReducer, initialState);
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}