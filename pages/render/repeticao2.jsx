import  listaProdutos from '../../data/listaProduto'
export default function repeticao2(){
    const Borda = {
        border:'1px solid #000'
    }
    function renderizarLinhas(){
         return listaProdutos.map(produto=>{
            return(
                <tr key={produto.id}>
                    <td style={Borda}>{produto.id}</td>
                    <td style={Borda}>{produto.nome}</td>
                    <td style={Borda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={Borda}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}