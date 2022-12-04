import React from "react";
import Flat from "./particle/Flat";

export default function Intro():JSX.Element {
    return(
        <div className={" w-auto h-128 bg-green-400"}>
            <Flat top={5} left={5} width={12} height={5} zDepth={1}/>
        </div>
    )
}