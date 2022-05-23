import React from "react";
 
export function Formulario(){
    return(
        <div>
            <section class="container p-4 col-lg-4 border rounded bg-light">
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
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" pattern="(?=.[A-Za-z]){8,} "/>
                        <div class="form-text" >contraseñas</div>
                    </div>
                    <center><button type="submit" class="btn btn-success col-3">Enviar</button></center>
                </form>
            </section>
        </div>
    )
}