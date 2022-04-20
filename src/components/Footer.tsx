import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    },
    text: {
        fontWeight: 'bold'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar className={classes.footer}>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography className={classes.text}>Cristian Baronetto</Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
