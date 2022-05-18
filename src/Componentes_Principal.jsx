import React from 'react';
import {Formulario} from './Fomulario';
import {Tabla} from './Tabla'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Formulario/>
            <Tabla/>
            <Tabla/>
            <Tabla/>
        
        </React.Fragment>
    )
}
