import React from 'react';
import { useStore } from '../context/StoreProvider';

export default function Home(): JSX.Element {
    const { cities } = useStore();
    return (
        <div>
            {cities?.map((city, index) =>{
                return <div key={index}>
                    <p>{city.id}</p>
                    <p>{city.name}</p>
                    <img src={`http://openweathermap.org/img/wn/${city.image}@2x.png`} alt='Not Found'/>
                </div>
            })}
        </div>
    )
}
