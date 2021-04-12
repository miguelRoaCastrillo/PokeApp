import React, { Fragment, useState, useEffect } from 'react';
import BannerContent from './../../../components/BannerContent';
import { pokemon } from './../../../assets/';

export const Home = ({ search, ...otherProps }) => {

    const [ data, setData ] = useState({
        pokeName: 'Pokémon',
        pokeNumber: '000',
        pokeBility: 'Ability',
        pokeType: 'Type',
        pokeHeight:'Decimeters',
        pokeImage: ''
    })

        
    useEffect(() => {
        searchPokemon(search, pokemon);
    }, [search]) //Solo se vuelve a ejecutar si search cambia su valor


    const searchPokemon = (searchId, json) => {        
        json.forEach(element => {
            if(element.id === parseInt(searchId)){                
                setData({
                    pokeName: element.name,
                    pokeNumber: element.id,
                    pokeBility: element.ability,
                    pokeType: element.type,
                    pokeHeight: element.height,
                    pokeImage: element.image                  
                });  
                console.log(element.image);
            }
            if(element.name.toLowerCase() === searchId.toLowerCase()){
                setData({
                    pokeName: element.name,
                    pokeNumber: element.id,
                    pokeBility: element.ability,
                    pokeType: element.type,
                    pokeHeight: element.height,
                    pokeImage: element.image                  
                });  
                console.log(element.image);
            }
        });
        console.log(searchId);
    }

    return(
        <Fragment>
                <BannerContent 
                    pokenumber={ data.pokeNumber }                        
                    pokename={ data.pokeName }
                    pokebility={ data.pokeBility } 
                    pokeType={ data.pokeType }
                    height={ data.pokeHeight }
                    pokeImage={ data.pokeImage }                 
                />             
        </Fragment>        
    )    
}

export default Home;