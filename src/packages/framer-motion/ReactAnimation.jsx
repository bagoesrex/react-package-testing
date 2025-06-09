import { motion } from "motion/react"
import { useState } from "react"

export default function ReactAnimation() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)


    return (
        <>
            <div className="flex flex-col items-center gap-6">
                <h1 className="pb-4 font-extrabold text-2xl font-sans">React Animation</h1>

                <div id="example">
                    <div>
                        <motion.div
                            className="box"
                            animate={{ x, y, rotate }}
                            transition={{ type: "spring" }}
                        />
                    </div>
                    <div className="inputs">
                        <Input value={x} set={setX}>
                            x
                        </Input>
                        <Input value={y} set={setY}>
                            y
                        </Input>
                        <Input value={rotate} set={setRotate} min={-180} max={180}>
                            rotate
                        </Input>
                    </div>
                    <StyleSheet />
                </div>

                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    style={box}
                    className="my-18"
                />

                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    initial="hidden"
                    animate="visible"
                    style={image}
                >
                    <motion.circle
                        className="circle-path"
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#ff0088"
                        variants={draw}
                        custom={1}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="30"
                        x2="360"
                        y2="170"
                        stroke="#8df0cc"
                        variants={draw}
                        custom={2}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="170"
                        x2="360"
                        y2="30"
                        stroke="#8df0cc"
                        variants={draw}
                        custom={2.5}
                        style={shape}
                    />
                    <motion.rect
                        width="140"
                        height="140"
                        x="410"
                        y="30"
                        rx="20"
                        stroke="#0d63f8"
                        variants={draw}
                        custom={3}
                        style={shape}
                    />
                    <motion.circle
                        cx="100"
                        cy="300"
                        r="80"
                        stroke="#0d63f8"
                        variants={draw}
                        custom={2}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="230"
                        x2="360"
                        y2="370"
                        stroke="#ff0088"
                        custom={3}
                        variants={draw}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="370"
                        x2="360"
                        y2="230"
                        stroke="#ff0088"
                        custom={3.5}
                        variants={draw}
                        style={shape}
                    />
                    <motion.rect
                        width="140"
                        height="140"
                        x="410"
                        y="230"
                        rx="20"
                        stroke="#8df0cc"
                        custom={4}
                        variants={draw}
                        style={shape}
                    />
                    <motion.circle
                        cx="100"
                        cy="500"
                        r="80"
                        stroke="#8df0cc"
                        variants={draw}
                        custom={3}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="430"
                        x2="360"
                        y2="570"
                        stroke="#0d63f8"
                        variants={draw}
                        custom={4}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="570"
                        x2="360"
                        y2="430"
                        stroke="#0d63f8"
                        variants={draw}
                        custom={4.5}
                        style={shape}
                    />
                    <motion.rect
                        width="140"
                        height="140"
                        x="410"
                        y="430"
                        rx="20"
                        stroke="#ff0088"
                        variants={draw}
                        custom={5}
                        style={shape}
                    />
                </motion.svg>
            </div>
        </>
    )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
}

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

const image = {
    maxWidth: "80vw",
}

const shape = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}

function Input({ value, children, set, min = -200, max = 200 }) {
    return (
        <label>
            <code>{children}</code>
            <input
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value))}
            />
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
            />
        </label>
    )
}

function StyleSheet() {
    return (
        <style>{`
            #example .box {
                width: 200px;
                height: 200px;
                border-radius: 20px;
                border: 5px dotted #ff0088;
                pointer-events: none;
            }

            #example {
                display: flex;
                align-items: center;
            }

            #example input {
                accent-color: #ff0088;
                font-family: "Azeret Mono", monospace;
            }

            #example .inputs {
                display: flex;
                flex-direction: column;
                padding-left: 50px;
            }

            #example label {
                display: flex;
                align-items: center;
                margin: 10px 0;
            }

            #example label code {
                width: 100px;
            }

            #example input[type="number"] {
                border: 0;
                border-bottom: 1px dotted #ff0088;
                color: #ff0088;
                margin-left: 10px;
            }

            #example input[type="number"]:focus {
                outline: none;
                border-bottom: 2px solid #ff0088;
            }

            #example input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }

            input[type='range']::-webkit-slider-runnable-track {
                height: 10px;
                -webkit-appearance: none;
                background: #0b1011;
                border: 1px solid #1d2628;
                border-radius: 10px;
                margin-top: -1px;
            }

            input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: #ff0088;
                top: -4px;
                position: relative;
            }
        `}</style>
    )
}