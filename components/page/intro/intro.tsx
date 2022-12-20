import React, {RefObject, useEffect, useRef} from "react";
import Flat from "./particle/Flat";


const Intro = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d')
    })

    return <div className={'w-max h-256'}>
        <canvas className={'m-0 p-0 w-max h-max'} ref={canvasRef}/>
    </div>
}
export default Intro;