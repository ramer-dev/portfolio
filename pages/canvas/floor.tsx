import React from "react";
type floorType = {
    position: number[]
  } 

export default function Floor(props : floorType) {
    return (
        <mesh {...props} receiveShadow={true}>
            <boxBufferGeometry args={[10,1,10]}/>
            <meshPhysicalMaterial color='white'/>
        </mesh>
    );
}