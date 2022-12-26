import React, {RefObject, useEffect, useRef, useState} from "react";
import {useRecoilValue} from "recoil";
import {globalWidthState} from "../../../lib/states/states";
import {useCanvas} from "../../../lib/hooks/useCanvas";
import {useClientWidthHeight} from "../../../lib/hooks/useClientWidthHeight";
import { ILightParticle, LightParticle } from "../../../pages/canvas/LightParticle";

const Intro: React.FC = () => {

    const mainRef = useRef<HTMLDivElement>(null);
    const rect = useClientWidthHeight(mainRef)

    const fillBackground = (ctx : CanvasRenderingContext2D) => {
        ctx.fillStyle = 'rgb(31,31,36)';
        ctx.fillRect(0,0, rect.width, rect.height)
    }

    const lightParticle: ILightParticle = new LightParticle(rect.width/2, rect.height/2)
    const animate = (ctx: CanvasRenderingContext2D) => {
        fillBackground(ctx);
        lightParticle.drawLightSource(ctx, 50, 50);
    }

    const canvasRef = useCanvas(rect.width, rect.height, animate)

    return <div className={'w-full h-screen'} ref={mainRef}>
        <canvas className={'h-full m-0 p-0'} ref={canvasRef}/>
    </div>
}
export default Intro;