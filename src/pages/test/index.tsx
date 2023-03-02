import Sketch from "react-p5"
import type P5 from "p5"

export default function Canvas() {
    const setup = (p5: P5, CanvasParentRef: Element) => p5.createCanvas(700, 400, p5.WEBGL).parent(CanvasParentRef);
    const draw = (p5: P5) => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.plane(100);
        p5.pop();
    }
    return <Sketch setup={setup} draw={(p5: P5) => draw(p5)}/>;
}