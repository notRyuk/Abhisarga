import { ReactP5Wrapper } from "react-p5-wrapper"
import type P5 from "p5"
import styles from "../../styles/canvas.module.css"

export default function Canvas() {
    const sketch = (p5: P5) => {
        p5.setup = () => p5.createCanvas(2000, 2000/1.3659742829, p5.WEBGL);
        p5.draw = () => {
            p5.background(250);
            p5.normalMaterial();
            p5.push();
            p5.rotateZ(p5.frameCount * 0.01);
            p5.rotateX(p5.frameCount * 0.01);
            p5.rotateY(p5.frameCount * 0.01);
            p5.plane(100);
            p5.pop();
        }
    }
    return (
        <ReactP5Wrapper sketch={sketch} className={styles.canvas_container} />
    )
}