import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

// 43- Contador, com estado
export default function contador(){
    const [numero, setNumero]= useState(0)
    /*function inc(){
        setNumero(numero +1)
    }
    function dec(){
        setNumero(numero -1)
    }*/
    //função arrow   ()
    const inc = () => setNumero(numero+1)
    const dec = () => {
        setNumero(numero-1)
    } 
    return(
        <div>
            <h3>Contador <ContadorDisplay numero={numero} /></h3>            
            <div>Valor: {numero}</div>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </div>
    )
}