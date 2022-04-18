import { useDispatch, useStore } from '../context/StoreProvider';
import { actionsList } from '../context/StoreReducer';
import SearchBar from './SearchBar';
import { AppBar, Toolbar, Grid, Typography, IconButton } from '@material-ui/core';
import { WbSunny, Brightness2 } from '@material-ui/icons';

export default function Nav(): JSX.Element {
    const dispatch = useDispatch();
    const { darkMode } = useStore();

    function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
        dispatch({ type: actionsList.CHANGE_MODE });
    }

    return (
        <AppBar position='static'>
            <Toolbar style={{ padding: '1vh' }} color='primary'>
                <Grid
                    container
                    direction='row'
                    justifyContent='space-around'
                    alignItems='center'
                >
                    <Typography>Weather</Typography>
                    <SearchBar />
                    <IconButton onClick={handleClick} style={{ color: darkMode ? 'white' : 'black' }} >
                        {darkMode ?
                            <WbSunny /> :
                            <Brightness2 />
                        }
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
