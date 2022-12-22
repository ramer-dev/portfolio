import Head from 'next/head'
import Career from '../components/page/Career';
import Profile from '../components/page/Profile';
import Project from '../components/page/Project';
import Skill from '../components/page/Skill';
import Intro from '../components/page/intro/intro';
import TopNavigationBar from '../components/header/TopNavigationBar';
import {RefObject, useEffect, useRef, useState} from "react";
import {useClientWidthHeight} from "../lib/hooks/useClientWidthHeight";
import {globalWidthState} from '../lib/states/states'
import {useRecoilValue, useSetRecoilState} from "recoil";


export default function Home(): JSX.Element {
    const mainRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const rect = useClientWidthHeight(mainRef)
    const setRecoilWidth = useSetRecoilState(globalWidthState);
    useEffect(() => {
        setRecoilWidth(rect.width)
    }, [rect, setRecoilWidth])


    return (
        <div ref={mainRef}>
            <Head>
                <title>Siniz Portfolio</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content={"width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header>
                <TopNavigationBar/>
            </header>

            <main className={'bg-slate-100 min-h-screen flex-row'}>
                <Intro/>
                <Skill/>
                <Profile/>
                <Project/>
                <Career/>

            </main>

        </div>
    )
}
