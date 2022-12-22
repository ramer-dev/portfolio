import React, {RefObject, useEffect, useRef, useState} from "react";
import {useRecoilValue} from "recoil";
import {globalWidthState} from "../../../lib/states/states";
import {useCanvas} from "../../../lib/hooks/useCanvas";
import {useClientWidthHeight} from "../../../lib/hooks/useClientWidthHeight";

const Intro: React.FC = () => {

    const mainRef = useRef<HTMLDivElement>(null);
    const rect = useClientWidthHeight(mainRef)

    const fillBackground = (ctx : CanvasRenderingContext2D) => {
        ctx.fillStyle = 'rgb(31,31,36)';
        ctx.fillRect(0,0, rect.width, rect.height)
    }

    const canvasRef = useCanvas(rect.width, rect.height, fillBackground)

    return <div className={'w-full h-screen'} ref={mainRef}>
        <canvas className={'h-full m-0 p-0'} ref={canvasRef}/>
    </div>
}
export default Intro;