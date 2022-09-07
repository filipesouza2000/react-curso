//Para comunicaçã indireta, deve haver ditera.
//Pai precisa passar algo para Filho, para que daí possa responder quando necessário.
import Filho from "./Filho";

export default function Pai(props){
    function falarComigo(param){
       console.log(param)
    }
    return(
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}