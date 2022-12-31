import React, {useState} from "react";

export default function Project(): JSX.Element {
    const [category, setCategory] = useState<Array<string>>([])

    return (
        <div className={'project w-auto h-128 bg-purple-400'}>
            플젝
            <h1>PROJECT</h1>
            <div className={"w-80"}>
                <ul className={'flex list-none'}>
                    <li>FE</li>
                    <li>BE</li>
                    <li>ML</li>
                    <li>ETC</li>
                </ul>
            </div>
        </div>
    )
}