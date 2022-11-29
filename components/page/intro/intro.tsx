import React from "react";
import Flat from "./particle/Flat";

export default function Intro():JSX.Element {
    return(
        <div className={" w-auto h-128 bg-green-400"}>
            <Flat width={2} height={5} zDepth={1}/>
        </div>
    )
}