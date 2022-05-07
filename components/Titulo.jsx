/*Nomes de componentes, que não representam página deve ter a notação da primeira letra maiúscula.
os que são somente arquivos podem ter somente letras mminúsculas*/
export default function Titulo(info){
    console.log(info)
    return info.corte ?(/*se houver a propriedade CORTE*/
        <>
            <h1>{info.text}</h1>
            <h2>{info.desc}</h2>
            <h2>Corte</h2>
        </>
    ):(/* senão */
        <>
            <p>{info.text}</p>
            <p>{info.desc}</p>
            <p>Litografia e Verniz</p>
        </>
    )
}