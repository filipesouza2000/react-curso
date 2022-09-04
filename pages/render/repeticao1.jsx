export default function Repeticao1(){
    const listaAprovados=[
    'Filipe','Lucas','Mateus','Daniel','Ronaldo','Dauro','Glaucio','Ronnie'
    ]
    function renderizarLista(){//MAP transforma array em outro array
        return listaAprovados.map((nome,i)=><li key={i}>{nome}</li>)
    }
    
    /*function renderizarLista(){ //exemplo manual
        const itens= []

        for (let i = 0; i < listaAprovados.length; i++) {            
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }
        return itens
    }*/
    return(
        <ul>
           {renderizarLista()}
        </ul>
    )
}