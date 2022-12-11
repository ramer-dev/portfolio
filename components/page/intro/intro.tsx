import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import Flat from "./particle/Flat";

export default function Intro(): JSX.Element {

    const canvas = useRef();
    let ctx = null;


    const [flatParticle, setFlatParticle] = useState(Array(15).fill(false))
    // Todo : edit this thing
    const placer = () => {
        const arr = Array(15).fill(false)
        const fiveList: number[] = []
        const threeList: number[] = []
        let count: number = 0;
        while (count < 3) {
            const ban = Math.floor(Math.random() * 15)
            const divFive = Math.floor(ban  / 5 - 0.1) // x
            const divThree = Math.floor(ban / 3 - 0.1) // y

            if (!(fiveList.includes(divFive)) || !(threeList.includes(divThree))) {
                console.log(ban, divFive,divThree)
                fiveList.push(divFive)
                threeList.push(divThree)
                arr[ban] = true
                count += 1
            }
        }
        return arr;

    }

    useEffect(()=>{

        setFlatParticle(placer());
    },[])

    return (
        <div className={"h-fit bg-green-400 my-0 mx-auto"}>
            <div className={"grid grid-cols-5 grid-rows-3"}>
                {flatParticle.map((t, i) => {
                    return t
                        ? <Flat key={i} width={100} height={150} zDepth={1}/>
                        : <div className={'grid-item'} key={i}/>
                })
                }
            </div>
            {/*<canvas ref={canvas}></canvas>*/}
        </div>

    )
}