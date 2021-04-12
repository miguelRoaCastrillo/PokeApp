import React from 'react'
import PokemonLogo from './../../../assets/img/pokemonLogo.png';

//Styles
import './styles.css'

export const AboutUs = () => {
    return(
        <div className="bodyAboutUs">  
            <div className="backgroundPatterAboutUs">
                <div className="textAboutUs">
                    <div style={{ width:'80%', height:'auto' }}>
                        <h1>
                            Hi there!
                        </h1>
                        <p>
                            This is just a react project for academic purposes, maybe we will work on it in the future as a personal project. This was done by Miguel Roa but I am not the author of the information presented in it, it belongs to <strong>Nintendo / Creatures Inc./ GAME FREAK inc</strong>
                        </p>
                    </div>                
                </div>
                <div className="containerLogoPokemon">
                    <img src={ PokemonLogo } alt="logoPokemon"/>
                </div>
            </div>                  
        </div>
    )
}

export default AboutUs;