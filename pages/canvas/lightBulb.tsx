import React from "react";

export type bulbType = {
    position : number[]
}

export default function LightBulb(props : bulbType){
    return (
        <mesh {...props}>
            <pointLight castShadow/>
            <sphereBufferGeometry args={[0.2, 30, 10]}/>
            <meshPhongMaterial emissive={'yellow'}/>
        </mesh>
    )
}