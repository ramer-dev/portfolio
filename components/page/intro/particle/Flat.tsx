import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "popmotion";
// import './flat_particle.css';

type ParticleType = {
    top: number,
    left: number,
    width: number,
    height: number,
    zDepth: number
}

export default function Flat(props: ParticleType): JSX.Element {
    const x = useMotionValue(0);
    const spring = useSpring(x);
    const top = props.top
    return (
            <AnimatePresence mode='wait'>
                <motion.div className={`absolute bg-slate-600 w-12 h-12 rounded-full`} initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }}
                    style={{top:props.top}}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >

                </motion.div>

            </AnimatePresence>
    )
}