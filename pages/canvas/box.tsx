import React from "react";
import { useLoader } from "@react-three/fiber";

type boxType = {
    rotateX : number,
    rotateY : number
}

export default function Box(props : boxType) {
    return (
        <mesh {...props} receiveShadow={true} castShadow={true}>
            <boxBufferGeometry/>
            <meshPhysicalMaterial  color={'white'}/>
        </mesh>
    )
}