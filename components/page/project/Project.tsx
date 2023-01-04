import React, {BaseSyntheticEvent, MouseEventHandler, SyntheticEvent, useEffect, useState} from "react";
import {EventHandlers} from "@react-three/fiber/dist/declarations/src/core/events";
import {ProjectItem} from "./ProjectItem";

export default function Project(): JSX.Element {
    const [category, setCategory] = useState<Array<string>>([])
    const majorList = ['FE', 'BE', 'ML', 'ETC']

    useEffect(() => {
        console.log(category)

    }, [category])

    const eventHandler = (e: BaseSyntheticEvent) => {
        const value = e.target.innerText;
        let newArr = [...category]
        if (!category.includes(value)) {
            newArr.push(value)
            setCategory(newArr)
        } else {
            newArr = newArr.filter(t => {
                return value !== t
            })
            setCategory(newArr)
        }
    }

    return (
        <div className={'project w-auto h-128'}>
            <h1>PROJECT</h1>
            <div className={"w-80"}>
                <ul className={'flex list-none gap-4 text-4xl justify-around'}>
                    {majorList.map(t => {
                        if (!category.includes(t)) {
                            return <li key={t} className={"transition cursor-pointer"}
                                       onClick={eventHandler}>{t}</li>
                        } else {

                            return <li key={t}
                                       className={"transition hover:text-yellow-200 text-yellow-300 font-medium cursor-pointer"}
                                       onClick={eventHandler}>{t}</li>
                        }

                    })}

                </ul>

            </div>
            <div className={'flex gap-5'}>
                <ProjectItem number={1} category={['FE','ETC']} content={"내용"} title={"제에모옥"}/>
            </div>
        </div>
    )
}