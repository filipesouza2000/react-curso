//39- Chamada de função via evento
function action1(){//função fora do componente
    console.log("Action1")
}
export default function botao(){
    function action2(){//função dentro do componente
        console.log("Action2")
    }
    function action5(e){//evento como parÂmetro
        console.log(e)
    } 
    return(
        <div>
            <input type="text" 
            onChange={(e => console.log(e.target.value))}//ao mudar exibe o valor preenchido a cada evento
            /><br></br>
            
            
            <button onClick={action1}>Action1</button>
            <button onClick={action2}>Action2</button>
            <button onClick={
                function(){ //função dentro do evento
                console.log("Action3")
                      }}>Action3
            </button>
            <button onClick={
                ()=>console.log("Action4")//função arrow
                }>Action4
            </button>
            <button onClick={action5}//referência ao evento
                >Action5
            </button>
            <button onClick={e=>action5(e.altKey)}//passando a propriedade do evento,resultando se foi aplicada a propriedade
                >Action5v2
            </button>
        </div>
    )
}