import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "popmotion";
// import './flat_particle.css';

type ParticleType = {
    width: number,
    height: number,
    zDepth: number
}

export default function Flat(props: ParticleType): JSX.Element {
    const x = useMotionValue(0);
    const spring = useSpring(x);

    return (
        <div className="absolute">
            <AnimatePresence mode='wait'>
                <motion.div className={`bg-slate-600 w-${props.width} h-${props.height} rounded-full`} initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >
                    test
                </motion.div>

            </AnimatePresence>
        </div>
    )
}