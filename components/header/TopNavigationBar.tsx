import React from "react";

export default function TopNavigationBar(): JSX.Element {
    return (
        <div className={'px-12 h-16 flex justify-between'}>
            <div className={"p-5"}>LOGO</div>
            <div className={"flex gap-2"}>
                <span className={"p-5"}>Profile</span>
                <span className={"p-5"}>Skill</span>
                <span className={"p-5"}>Project</span>
                <span className={"p-5"}>Career</span>
            </div>

        </div>
    )
}