import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//Router
import { Link } from 'react-router-dom';

//Estilos
import './styles.css';

export const NormalHeader = ({search, ...otherProps}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
        <div className="containerMenu">
            <div className="containerContent">                    
                <div className="containerTitle">
                    <IconButton onClick={ handleClick }>
                        <MenuIcon style={{ color: 'white' }} />                                    
                    </IconButton>
                    <Menu
                        id="pMenu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/" className="links">
                            <MenuItem onClick={ handleClose }>Home</MenuItem>
                        </Link>
                        <Link to="/aboutUs" className="links">
                            <MenuItem onClick={ handleClose }>About us</MenuItem>
                        </Link>
                        <Link to="undefined" className="links">
                            <MenuItem onClick={ handleClose }>Undefined</MenuItem>
                        </Link>                        
                    </Menu>
                    <h2 className="title">
                        PokémonApp
                    </h2>
                </div>
                <div className="containerInput">
                    <input onChange={ search } type="text" style={{color:'white', height: 30, backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', padding: 5, outline: 'none', borderRadius: 5, marginRight: 20, fontWeight: 'bold'}} />
                </div>
            </div>            
        </div>   
    )

}

export default NormalHeader;