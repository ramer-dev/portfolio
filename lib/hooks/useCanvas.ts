import {RefObject, useEffect, useRef} from "react";

export const useCanvas = (canvasWidth: number,
                          canvasHeight: number,
                          animate: (ctx: CanvasRenderingContext2D) => void) => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);


    // const recoilWidth = useRecoilValue(globalWidthState)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d')

        const setCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio ?? 1;
            if (canvas && ctx) {
                canvas.style.width = canvasWidth + 'px';
                canvas.width = canvasWidth * devicePixelRatio;

                canvas.style.height = canvasHeight + 'px';
                canvas.height = canvasHeight * devicePixelRatio;

                ctx.scale(devicePixelRatio, devicePixelRatio);
            }
        }
        setCanvas();

        if (ctx) {
            animate(ctx);
        }
    }, [canvasHeight, canvasWidth]);

    return canvasRef;
}
