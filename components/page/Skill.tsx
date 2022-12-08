import React from "react";
import { stack } from  '../../data/stack.json';

export default function Skill(): JSX.Element {
    return (
        <div className={'skills w-auto h-128'}>스킬
            <div className={'flex flex-wrap justify-around shadow-md rounded-xl max-w-5xl mx-auto'}>
                <div className={'flex-1 '}>
                    <h1 className={'rounded-t-xl border-2 border-b-0 p-2  text-center'}>FrontEnd</h1>
                    <div className={'p-2 border-2 flex-row'}>zz
                        <div>a</div>
                        <div>b</div>
                    </div>
                </div>

                <div className={'flex-1'}>
                    <h1 className={'rounded-t-xl border-2 border-b-0 p-2 text-center'}>FrontEnd</h1>
                    <div className={'p-2 border-2 flex-row'}>zz
                        <div>a</div>
                        <div>b</div>
                    </div>
                </div>

                <div className={'flex-1'}>
                    <h1 className={'rounded-t-xl border-2 border-b-0 p-2 text-center'}>FrontEnd</h1>
                    <div className={'p-2 border-2 flex-row'}>zz
                        <div>a</div>
                        <div>b</div>
                    </div>
                </div>
            </div>
        </div>
    )
}