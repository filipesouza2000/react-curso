import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <h2><s>Familia {props.familia}</s></h2>
            <Filho nome="Filipe" familia={props.familia}></Filho>
            <Filho nome="Fernanda" familia={props.familia}></Filho>
            <Filho nome="Henrique" familia={props.familia}></Filho>
            <Filho nome="Michelle" familia={props.familia}></Filho>
            <Filho nome="Gabriel" familia={props.familia}></Filho>
            <Filho nome="Kaleb" familia={props.familia}></Filho>
            <Filho {...props}></Filho>
        </div>
    )
}