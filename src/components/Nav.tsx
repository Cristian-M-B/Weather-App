import { useDispatch, useStore } from '../context/StoreProvider';
import { actionsList } from '../context/StoreReducer';
import SearchBar from './SearchBar';
import { AppBar, Toolbar, Grid, Typography, IconButton } from '@material-ui/core';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        padding: '1vh',
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    },
    text: {
        fontWeight: 'bold'
    }
}))

export default function Nav(): JSX.Element {
    const dispatch = useDispatch();
    const { darkMode } = useStore();
    const classes = useStyles();

    function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
        dispatch({ type: actionsList.CHANGE_MODE });
    }

    return (
        <AppBar position='static'>
            <Toolbar className={classes.nav}>
                <Grid
                    container
                    direction='row'
                    justifyContent='space-around'
                    alignItems='center'
                >
                    <Typography className={classes.text}>Weather</Typography>
                    <SearchBar />
                    <IconButton onClick={handleClick} style={{ color: 'white' }} >
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
