import { City } from '../interfaces/interfaces';
import { actionsList } from '../context/StoreReducer';
import { useDispatch } from '../context/StoreProvider';
import { Grid, Card, Typography, Button } from '@material-ui/core';

interface Props {
    city: City
}

export default function CityCard({ city }: Props): JSX.Element {
    const dispatch = useDispatch();

    function removeCity(e: React.MouseEvent<HTMLButtonElement>): void {
        dispatch({type: actionsList.REMOVE_CITY, payload: city.id})
    }

    return (
        <Card style={{ width: '300px', margin: '8px' }}>
            <Grid container justifyContent='flex-end'>
                <Button color='secondary' onClick={removeCity}>X</Button>
            </Grid>
            <Typography align='center'  style={{paddingTop:'4px'}}>{city.name} ({city.country})</Typography>
            <Grid container direction='row' justifyContent='center'>
                <img src={`http://openweathermap.org/img/wn/${city.image}@2x.png`} alt='Not Found' />
            </Grid>
            <Typography align='center' style={{paddingBottom:'4px'}}>Min {city.min}°C ~ Max {city.max}°C</Typography>
        </Card>
    )
}