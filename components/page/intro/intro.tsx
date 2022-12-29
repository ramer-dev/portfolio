import React, {BaseSyntheticEvent, RefObject, useEffect, useRef, useState} from "react";
import {globalWidthState} from "../../../lib/states/states";
import {useCanvas} from "../../../lib/hooks/useCanvas";
import {useClientWidthHeight} from "../../../lib/hooks/useClientWidthHeight";
import {ILightParticle, LightParticle} from "../../../pages/canvas/LightParticle";
import Flat from "./particle/Flat";

const Intro: React.FC = () => {

    const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const parRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const rect = useClientWidthHeight(mainRef)
    const [isHover, setHover] = useState(false);

    const fillBackground = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = 'rgb(31,31,36)';
        ctx.fillRect(0, 0, rect.width, rect.height)
    }

    const lightParticle: ILightParticle = new LightParticle(rect.width / 2, rect.height / 2)
    const animate = (ctx: CanvasRenderingContext2D) => {
        fillBackground(ctx);
        lightParticle.drawLightSource(ctx, 50, 50);
    }


    const eventHandler = (e: BaseSyntheticEvent) => {
        switch (e.type) {
            case 'mouseenter':
                setHover(true);
                break;

            case 'mouseleave':
                setHover(false);
                break;
        }
    }

    // useEffect(() => {
    //     if(isHover){
    //
    //     }
    // }, [isHover])

    const canvasRef = useCanvas(rect.width, rect.height, animate)

    return <div className={'w-full relative h-screen bg-neutral-900 overflow-x-hidden'} ref={mainRef}>
        <Flat height={400} width={200} left={100} top={200}/>
        <Flat height={450} width={150} left={50} top={250}/>
        <Flat height={200} width={100} left={0} top={380}/>

        <Flat height={450} width={150} left={900} top={350}/>
        <Flat height={200} width={100} left={800} top={380}/>

        <div className={'relative top-1/2 w-96 mx-32'} ref={parRef} onMouseEnter={eventHandler} onMouseLeave={eventHandler}>
            <h1 className={'text-8xl text-white font-bold hover:opacity-80 transition cursor-default'}>HS Shin</h1>
            <p className={'mx-1 text-xl text-white hover:opacity-80 transition cursor-default'}>FE Developer</p>
        </div>
    </div>
}
export default Intro;