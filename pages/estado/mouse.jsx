//41- Componente com estado, evento do mouse

import { useState } from "react"

//aula 7:45
export default function mouse(){
    const arrayX= useState(0)
    let x = arrayX[0]
    const alterarX=arrayX[1]

    const arrayY= useState(0)
    let y = arrayY[0]
    const alterarY=arrayY[1]

    
    const estilo={
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems:"center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    function MouseMove(ev){
        alterarX(ev.clientX)
        alterarY(ev.clientY)
        //console.log(ev.clientX, ev.clientY) 
        //x=ev.clientX
        //y=ev.clientY
    }
    return(
        <div style={estilo}  onMouseMove={MouseMove}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}