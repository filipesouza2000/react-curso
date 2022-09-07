//Botão1- Comunicação direta, passa como parametro o evento
//Botão2- o componente Filho está passando uma informação
//de forma indireta, à partir de uma função
//que foi passada do Pai para Filho
//e o Filho chama essa função passando informação.
export default function Filho(props){
    //console.log(props.funcao)
    return(
        <div>
            <h1>Filho1</h1>
            <button onClick={props.funcao}>Falar pai 1</button>
            <button onClick={()=>props.funcao("Passei no ENEM")}>Falar pai 2</button>
        </div>
    )
}