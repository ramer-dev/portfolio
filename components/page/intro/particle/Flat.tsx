import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useRecoilValue} from "recoil";
import {clientScrollY} from "../../../../lib/states/states";

// import './flat_particle.css';

type ParticleType = {
    width: number,
    height: number,
    left: number,
    top: number,
    depth:number,
    randPosX : number,
    delay : number,
}

export default function Flat(props: ParticleType): JSX.Element {
    const clientY = useRecoilValue<number>(clientScrollY);

    return (
        <AnimatePresence mode='wait'>
            <motion.div className={`absolute rounded-full`}
                        animate={["initial"]}
                        initial={{rotateZ: -30, opacity: .6}}
                        whileHover={["grow"]}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                        }}
                        variants={{
                        grow:{
                            scale: 1.05,
                            opacity:0.1,
                        },
                        initial: {
                            x:[-props.randPosX, props.randPosX],
                            transition: {
                                delay : props.delay,
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }
                        }}
                        style={{
                            width: props.width, height: props.height, left: props.left, top: props.top + (props.depth * clientY) * 0.04,
                            background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 8.33%, rgba(217, 217, 217, 0.43) 100%)",
                            backdropFilter: "blur(10px)"
                        }}
            >
            </motion.div>

        </AnimatePresence>
    )
}