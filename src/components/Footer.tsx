import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinkedIn, PictureAsPdf, Work } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    },
    text: {
        fontWeight: 'bold',
        marginRight: '2vw'
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
                    <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer'>
                        <LinkedIn style={{ color: 'white', marginRight:'1vw' }} />
                    </a>
                    <a href='https://drive.google.com/file/d/16YnqZpJIkr_UjgyU2vc6p4ors1APlyb1/view' target='_blank' rel='noreferrer'>
                        <PictureAsPdf style={{ color: 'white', marginRight:'1vw' }} />
                    </a>
                    <a href='https://cristianbaronetto.vercel.app' target='_blank' rel='noreferrer'>
                        <Work style={{ color: 'white' }} />
                    </a>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
