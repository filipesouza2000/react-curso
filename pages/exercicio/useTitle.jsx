import React from 'react'
import Titulo from '../../components/Titulo'

export default function useTitle(){
    return(     
<div>
    <Titulo 
        /*passar atributos html, nome customizado*/
        text="Cinbal Volta Redonda"
        desc="Matriz" 
           
    /> 
    <Titulo 
        /*passar atributos html, nome customizado*/
        text="Cinbal - Pinheiral"
        desc="Filial-Parque Maíra"
        corte    
    />    
</div>   

    )
}