import { ReactP5Wrapper } from "react-p5-wrapper"
import type P5 from "p5"
import styles from "../../styles/canvas.module.css"

export default function Canvas() {
    const sketch = (p5: P5) => {
        let img: P5.Element = p5.createImg("../../assets/paper_1.png", "react logo")
        // p5.preload = () => {
        //     img = p5.createImg("../../assets/paper_1.png", "react logo")
        // }
        p5.setup = () => {
            p5.createCanvas(1000, 1000)
        }
        p5.draw = () => {
            p5.background(127);
            p5.image(img, 0, 0, 100, 100)
        }
    }
    return (
        <ReactP5Wrapper sketch={sketch} className={styles.canvas_container} />
    )
}