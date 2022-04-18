import { useStore } from '../context/StoreProvider';
import CityCard from './CityCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    home: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: '3vh',
        paddingBottom: '3vh',
        minHeight: '84vh',
    },
}))

export default function Home(): JSX.Element {
    const { cities } = useStore();
    const classes = useStyles();
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            className={classes.home}
        >
            {cities?.map(city => {
                return <CityCard key={city.id} city={city} />
            })}
        </Grid>
    )
}
