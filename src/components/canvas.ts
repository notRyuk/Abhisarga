import P5 from "p5";

type SketchCleanup = { 
    cleanup: () => void 
};

interface Args {
    width?: number
    height?: number
}

export default ({width, height}: Args = {}): SketchCleanup => {
    const sketch = (p5: P5) => {
        const setup = () => {
            p5.createCanvas(width || 500, height || 500);
        };
        const draw = () => {
            let x = 50;
            let y = 50;
            p5.background(0);
            p5.ellipse(x, y, 70, 70);
            x++;
        };
    }
	const p5 = new P5(sketch);
    return {
        cleanup: p5.remove
    }
};