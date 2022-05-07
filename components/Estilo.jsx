export default function Estilo(props){
    /*
    Utilizado para chamar objeto e suas propriedades, 
    também condicional para CSS, com code complete de todas propriedades CSS
    {{ prop: (se) consição ?(então) valor : (senão) valor }}
    */
    return(
        <div>
            <h1 style={
                {
                backgroundColor: props.numero >= 0 ? "green" : "yellow",
                color: props.color,           
                textAlign: props.direita ? "right" : "left"     
                }
                }>
                Texto
            </h1>
            <h2 className={props.numero >= 0 ? "red" : "blue"}>
                Texto
            </h2>
        </div>
    )
}