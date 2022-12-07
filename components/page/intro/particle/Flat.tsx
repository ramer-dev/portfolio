import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "popmotion";
// import './flat_particle.css';

type ParticleType = {
    width: number,
    height: number,
    zDepth: number,
    // left:number,
    // top:number
}

export default function Flat(props: ParticleType): JSX.Element {
    const x = useMotionValue(0);
    const spring = useSpring(x);

    return (
            <AnimatePresence mode='wait'>
                <motion.div className={`grid-item relative bg-slate-600 rounded-full`}
                    initial={{y:100}}
                    whileInView={"visible"}
                    viewport={{once:true}}
                    animate={{ y:[10,-10, 10,], }}
                    transition={{ duration:3, ease: "easeInOut", times:[0,0.5, 1], repeat:Infinity, repeatDelay:0}}
                    style={{width:props.width, height:props.height}}
                >
                </motion.div>

            </AnimatePresence>
    )
}