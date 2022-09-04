import If from "../../components/If";

export default function condicional2(){
    const num = 9
    return(
        <div>
            <If teste = {num % 2 ===0}>
                O numero {num} é par
            </If>
            <If teste = {num % 2 ===1}>
                O numero {num} é Impar
            </If>
        </div>
    )
}