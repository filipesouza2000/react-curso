export default function SomentePar(props){
    const par = props.numero % 2 === 0
    return par ? <h2>{props.numero}</h2> : null
    /*if (props.numero % 2 === 0) {
        return <h2>{props.numero}</h2>
    }else{
        return null
    }*/
}