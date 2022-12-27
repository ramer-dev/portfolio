import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useMotionValue, useSpring, Variants} from "framer-motion";
import {distance} from "popmotion";
// import './flat_particle.css';

type ParticleType = {
    width: number,
    height: number,

    left: number,
    top: number
}

export default function Flat(props: ParticleType): JSX.Element {
    const x = useMotionValue(0);
    const spring = useSpring(x);


    return (
        <AnimatePresence mode='wait'>
            <motion.div className={`absolute rounded-full`}
                        initial={{rotateZ: -30, opacity: .6}}
                        whileHover={{opacity: 0.1}}
                        transition={{
                            duration: .25,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                        }}
                        style={{
                            width: props.width, height: props.height, left: props.left, top: props.top,
                            background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 8.33%, rgba(217, 217, 217, 0.43) 100%)"
                        }}
            >
            </motion.div>

        </AnimatePresence>
    )
}