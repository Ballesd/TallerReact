import React from "react";
 
export function Formulario(){
    return(
        <div>
            <section class="container p-4 col-lg-4">
                <form name="viewport" content="width=device-width col-lg-3 col-md-4">
                    <div class="mb-3" >
                        <label for="exampleInputEmail1" class="form-label">nombre</label>
                        <input type="text" class="form-control" aria-describedby="nameHelp"/>
                    </div>   

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" aria-describedby="ApellidoHelp"/>
                    </div>   

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputFN1" class="form-label">Fecha de nacimiento</label>
                        <input type="date" class="form-control" min="1900-01-01" aria-describedby="FNHelp"/>
                        </div>

                    <div class="mb-3"> 
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" pattern="(?=.[A-Za-z]){8,} "/>
                        <div class="form-text" id="Contid" >contraseñas</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirmar Contraseña</label>
                        <input type="password" class="form-control" id="Cont2"/>
                        <div class="form-text" id = "Conti">contraseñas</div>
                    </div>
                    <center><button type="submit" id ="botonEnviar" class="btn btn-success col-3">Enviar</button></center>
                </form>
            </section>
        </div>
    )
}