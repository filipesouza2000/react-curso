
/* No React não pode retornar dois elementos 'TAG' adjacentes(independentes e eseparados)
   Para resolver deve importar o react, utilizar sua ferramenta Fragment, ou utilizar tag vazia <></>
   não cria elemento, já cria suas divs adjacentes.
*/
import React from 'react'
export default function fragment (){
    return(
        <React.Fragment>
            <h1>Titulo-Fragmento 1</h1>
            <h2>SubTitulo-Fragmento 2</h2>
        </React.Fragment>
    )
}