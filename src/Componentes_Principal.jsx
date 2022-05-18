import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formulario} from './Fomulario';
import {Tabla} from './Tabla'
import {Boton} from './boton';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Formulario/>
            <Tabla/>
            <Tabla/>
            <Tabla/>
        
            <Boton/>
        </React.Fragment>
    )
}
