import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import './styles.css'

export const NotFound = () => (
    <div className="container">
        <h1 className="title404">
            404
        </h1>
        <p className="text404">
            No hay nada aquí
        </p>
        <SentimentVeryDissatisfiedIcon
           style={{ fontSize: '80px', marginBottom: '30px' }}
        />
    </div>
)

export default NotFound;