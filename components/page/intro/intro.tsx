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

    return <div className={'origin-center w-full relative h-screen overflow-x-hidden overflow-y-hidden'} ref={mainRef}>
        <div className={"relative min-w-max min-h-max translate-x-1/2 translate-y-1/2 z-10"}>
            <Flat height={400} width={200} left={-800} top={200} delay={0.3} randPosX={10} depth={1}/>
            <Flat height={450} width={150} left={-850} top={250} delay={0} randPosX={30} depth={2}/>
            <Flat height={200} width={100} left={-900} top={380} delay={0.5} randPosX={10} depth={0}/>

            <Flat height={450} width={150} left={0} top={350} delay={0.9} randPosX={10} depth={0}/>
            <Flat height={200} width={100} left={-100} top={380} delay={0.2} randPosX={30} depth={2}/>

            <Flat height={430} width={220} left={500} top={300} delay={0.9} randPosX={40} depth={3}/>
            <Flat height={200} width={100} left={700} top={400} delay={0.2} randPosX={10} depth={0}/>
            <Flat height={300} width={150} left={700} top={180} delay={0.5} randPosX={20} depth={1}/>
        </div>
        <div className={'relative top-1/2 w-auto 2xl:mx-56 xl:mx-52 lg:mx-40 md:mx-20 sm:mx-10 xs:mx-10'} ref={parRef} onMouseEnter={eventHandler}
             onMouseLeave={eventHandler}>
            <h1 className={'2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-4xl text-white font-bold hover:opacity-80 transition cursor-default'}>HS Shin</h1>
            <p className={'mx-1 text-xl text-white hover:opacity-80 transition cursor-default'}>FE Developer
                Porfolio</p>
        </div>

    </div>
}
export default Intro;