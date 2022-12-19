import React from "react";
import {stack} from '../../data/stack.json';

export default function Skill(): JSX.Element {
    return (
        <div className={'skills h-128'}>스킬
            <div className={'max-w-6xl mx-auto'}>
                <div className={'flex flex-wrap gap-10 justify-around rounded-xl mx-5'}>

                    <div className={'flex-shrink-0 w-80'}>
                        <h1 className={'w-1/3 rounded-t-xl border-2 border-b-0 p-2  text-center'}>FrontEnd</h1>
                        <div className={'p-2 border-2 flex-row'}>zz
                            <div>a</div>
                            <div>b</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}