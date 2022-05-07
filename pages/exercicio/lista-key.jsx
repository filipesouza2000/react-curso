/*Warning: Each child in a list should have a unique "key" prop.
Aviso: Cada filho em uma lista deve ter um prop "chave" exclusivo.

As keys no loop React ajudam a identificar quais itens foram alterados, adicionados ou removidos, 
e é importante fornecer aos elementos pai dentro de um loop chaves exclusivas para ajudar a fornecer 
uma identidade estável ao elemento ou componente.
*/
export default function lista(){
    const list=[
        {id:1,item:<span>1-</span>},
        {id:1,item:<span>2-</span>},
        {id:1,item:<span>2-</span>},
        {id:1,item:<span>3-</span>},
        {id:1,item:<span>4-</span>},
        {id:1,item:<span>5-</span>},
        {id:1,item:<span>6-</span>},
        {id:1,item:<span>7-</span>},
        {id:1,item:<span>8-</span>},
        {id:1,item:<span>9-</span>},
        {id:1,item:<span>10</span>},
    ]
    return (        
           <div>
            {
                list.map((l)=>(
                    <p id={l.id}>{l.item}</p>
                ))
            }
           </div>
        )
}