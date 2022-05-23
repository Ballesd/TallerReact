import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formulario} from './Fomulario';
import {Tabla} from './Tabla'
import {Boton} from './boton';
import {Nabvar} from './Nabvar';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Nabvar/>
            <Tabla/>
            <Formulario/>
            <Tabla/>
            <Tabla/>
        
            <Boton/>
        </React.Fragment>
    )
}
