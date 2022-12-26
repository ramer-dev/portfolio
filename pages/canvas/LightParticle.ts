export interface ILightParticle {
    drawLightSource: (ctx: CanvasRenderingContext2D,
                      pointCenterX: number,
                      pontCenterY: number) => void;

}

export class LightParticle implements ILightParticle {
    private centerX: number;
    private centerY: number;
    private width: number;
    private height: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.centerX = canvasWidth / 2;
        this.centerY = canvasHeight / 2; // why ?
        this.width = 300
        this.height = 600

    }

    drawLightSource(ctx: CanvasRenderingContext2D,
                    pointCenterX: number,
                    pointCenterY: number) {
        ctx.beginPath();

        // It works on my machine
        ctx.rotate(-25 * (Math.PI / 180));
        ctx.roundRect(pointCenterX, pointCenterY, this.width, this.height,500)
        const grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");


        ctx.stroke();

    }
}