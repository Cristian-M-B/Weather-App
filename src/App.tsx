import { useEffect } from 'react';
import { useDispatch, useStore } from './context/StoreProvider';
import { actionsList } from './context/StoreReducer';
import Nav from './components/Nav';
import Home from './components/Home';
import { ThemeProvider } from '@material-ui/styles';
import { lightTheme, darkTheme } from './theme';

export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const { darkMode } = useStore();

  useEffect(() => {
    dispatch({ type: actionsList.GET_LOCAL_STORAGE });
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Nav />
      <Home />
    </ThemeProvider>
  )
}
