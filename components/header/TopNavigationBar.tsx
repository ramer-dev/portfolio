import React from "react";

export default function TopNavigationBar(): JSX.Element {
    const onClickHandler = () => {
        console.log('click')
    } 
    
    return (
        <div className=" h-12 flex justify-between px-40">
            <div className="my-3 text-xs"> Logo </div>
            <div className="flex gap-4">
                <span onClick={onClickHandler}>test</span>
                <span>test</span>
                <span>test</span>

            </div>
        </div>
    )
}