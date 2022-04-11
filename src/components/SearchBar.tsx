import React, { useState } from 'react';
import axios from 'axios';
import { OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from '../context/StoreProvider';
import { actionsList } from '../context/StoreReducer';
import { City } from '../interfaces/interfaces';


const useStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: 'white',
        width: '30vw'
    },
    '@media (max-width: 600px)': {
        input: {
            width: '50vw'
        }
    }
}))

export default function SearchBar(): JSX.Element {
    const [input, setInput] = useState<String>('');
    const dispatch = useDispatch();
    const classes = useStyles();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        sendForm(input);
        setInput('');
    }

    async function sendForm(input: String) {
        try {
            let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            let newCity: City = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.weather[0].icon
            }
            dispatch({ type: actionsList.ADD_CITY, payload: newCity })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <OutlinedInput
                autoFocus
                value={input}
                onChange={handleChange}
                className={classes.input}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton onClick={handleSubmit}>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </form>
    )
}
