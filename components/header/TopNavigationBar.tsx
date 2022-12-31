import React, {RefObject, useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {clientScrollY} from "../../lib/states/states";

export default function TopNavigationBar(): JSX.Element {
    const [clientWindowHeight, setClientWindowHeight] = useState(false);
    const [scrollY, setClientScrollY] = useRecoilState(clientScrollY);

    const handleScroll = () => {
        setClientWindowHeight(scrollY > 1);
        setClientScrollY(window.scrollY)
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll)
    },[] )

    useEffect(() => {
        console.log(scrollY)
    }, )
    return (
        <div className={'fixed w-full z-50 transition bg-white ' + (!clientWindowHeight ? 'bg-transparent text-white' : 'bg-white text-black')}>
            <div className={'px-12 h-16 flex justify-between '}>
                <div className={"p-5"}>LOGO</div>
                <div className={"flex gap-2"}>
                    <span className={"p-5"}>Profile</span>
                    <span className={"p-5"}>Skill</span>
                    <span className={"p-5"}>Project</span>
                    <span className={"p-5"}>Career</span>
                </div>
            </div>
        </div>
    )
}