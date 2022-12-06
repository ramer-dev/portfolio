import React from "react";
import Flat from "./particle/Flat";

export default function Intro(): JSX.Element {

    // Todo : edit this thing
    const placer = () => {
        const arr = Array(15).fill(false)
        const mod_five: number[] = []
        const mod_three: number[] = []
        let count: number = 0;
        while (true) {
            const ban = Math.floor(Math.random() * 15 + 1)

            if (!(ban % 5 in mod_five && ban % 3 in mod_three)) {
                mod_five.push(ban % 5)
                mod_three.push(ban % 3)
                arr[ban - 1] = true
                count += 1
            }

            if (count == 3)
                console.log(arr)
                return arr
        }

    }
    return (
        <div className={"h-fit bg-green-400 my-0 mx-auto"}>
            <div className={"grid"}>
                {placer().map((t, i) => {
                    return t
                        ? <Flat key={i} left={i%3 * 100} top={i%5 * 100} width={100} height={150} zDepth={1}/>
                        : <div key={i} className={"item"}/>
                })
                }
            </div>
        </div>

    )
}