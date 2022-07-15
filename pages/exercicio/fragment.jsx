
/* No React não pode retornar dois elementos 'TAG' adjacentes(independentes e separados)
   Para resolver deve importar o react, utilizar sua ferramenta Fragment, ou utilizar tag vazia <></>
   não cria elemento, já cria suas divs adjacentes.
*/
//Não precisa importar react
export default function fragment (){
    return(
        <>
            <h1>Titulo-Fragmento 1</h1>
            <h2>SubTitulo-Fragmento 2</h2>
        </>
    )
}