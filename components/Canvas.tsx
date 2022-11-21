import React, {useRef, useState, useEffect, LegacyRef} from "react";
import {fabric} from "fabric";
import dynamic from "next/dynamic";

const Canvas = (): JSX.Element => {

    const canvasEl = useRef(null);

    const randInt = (start: number | null, end: number): number => {
        return Math.floor((start ? start : 0) + Math.random() * (end + 1));
    }

    const initCanvas = () => {
        return new fabric.Canvas("canvas", {
            height: window.innerHeight,
            width: window.innerWidth,
            backgroundColor: "pink",
        });
    }

    const [canvas, setCanvas] = useState(null);

    const roundRect = () => {
        return new fabric.Rect({
            width: 100,
            height: 100,
            left: randInt(0, window.innerWidth),
            top: randInt(0, window.innerHeight),
            stroke: 'black',
            strokeWidth: 2,
            fill: 'white',
            rx: 100,
            ry: 100,
        })
    }

    // useEffect(() => {
    //
    //
    // }, []);

    useEffect(() => {
        console.log('load', canvas)
        if (canvas) {
            window.addEventListener('resize', handleResize);
            canvas.add(roundRect())
            canvas.add(roundRect())
            canvas.add(roundRect())

        } else {
            setCanvas(initCanvas());
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [canvas])

    const handleResize = () => {
        // const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        // const height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        //
        // canvas.setWidth(width);
        // canvas.setHeight(height);
        // console.log(canvasEl.current.clientWidth)

        const ratio          = canvas.getWidth() / canvas.getHeight();
        const containerWidth = canvasEl.current.clientWidth;
        const scale          = containerWidth / canvas.getWidth();
        const zoom           = canvas.getZoom() * scale;

        canvas.setDimensions({width: containerWidth, height: containerWidth / ratio});
        canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);

    }

    return <div id={'canvas-wrapper'} ref={canvasEl}>
        <canvas id="canvas"/>
    </div>;
}


export default dynamic(() => Promise.resolve(Canvas), {ssr: false})