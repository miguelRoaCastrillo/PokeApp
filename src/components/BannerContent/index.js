import React from 'react';
import Logo from './../../logo.svg';
import { pokemon } from './../../assets/index.js'

//Estilos
import './styles.css'

export const BannerContent = ({ search, pokeId, pokenumber, pokename, pokebility, pokeType, height, pokeImage, ...otherProps }) => {
    return(

        <div className="containerBannerContent">            
            <div className="containerInfo">
                <div className="forInfo">
                    <h3 style={{ marginTop: 2, marginBottom: 2 }}>
                        <span style={{color: '#014822'}}>{ pokenumber }</span> { pokename }
                    </h3>
                    <strong>
                        Habilidad
                    </strong>
                    <p>
                        { pokebility }
                    </p>
                    <strong>
                        Tipo
                    </strong>
                    <p>
                        { pokeType }
                    </p>
                    <strong>
                        Altura
                    </strong>
                    <p>
                        { height } DM
                    </p>
                </div>
            </div>  
            <div className="containerImagePokemon">
                <div className="backPokeBall">
                    <img src={ pokeImage !== '' ? pokeImage : Logo  } alt="pokeImage" style={{ margin:'auto', width: '60%', height: 'auto' }}/>
                </div>                
            </div>
        </div>
    )
}

export default BannerContent;