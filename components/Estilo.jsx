export default function Estilo(props){
    /*
    Utilizado para chamar objeto e suas propriedades, 
    também condicional para CSS, com code complete de todas propriedades CSS
    {{ prop: (se) consição ?(então) valor : (senão) valor }}
    */
    return(
        <div>
            <h1 style={{backgroundColor: props.numero >= 0 ? "#2D2" : "#D22"}}>
                Texto
            </h1>
        </div>
    )
}