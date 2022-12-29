import React, {RefObject, useEffect, useRef, useState} from "react";

export default function TopNavigationBar(): JSX.Element {
    const [clientWindowHeight, setClientWindowHeight] = useState(false);
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY > 1);
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll)
    },[] )

    useEffect(() => {

    })
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