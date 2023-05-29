import React from "react";

type ProjectItemType = {
    number : number,
    category : Array<String>,
    title:string,
    content:string
}
export const ProjectItem = (props : ProjectItemType) : JSX.Element => {
    return (<div className={'hover:glass transition-all m-2 p-2'}>
        <hr className={'border-2'}/>
        {}
        <h1 className={'font-light text-7xl my-4'}>{props.number}</h1>
        {<h1 className={'font-bold text-3xl my-2'}>{props.category.join('/')}</h1>}
        <h3 className={"font-bold text-2xl my-4"}>{props.title}</h3>
        <p className={"w-52 break-words overflow-ellipsis line-clamp-6"}>
            {props.content}
        </p>
        {}
    </div>)
}