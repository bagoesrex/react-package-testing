// import { motion } from "motion/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function FramerMotion() {
    const [rotate, setRotate] = useState(0);
    const [enter, setEnter] = useState({
        opacity: 0,
        scale: 0,
    });
    const [direction, setDirection] = useState(1);

    const { scrollYProgress } = useScroll()

    function handleRotate() {
        setRotate((prev) => prev + 360);
        setEnter((prev) => {
            const newOpacity = prev.opacity + 0.2 * direction;
            const newScale = prev.scale + 0.2 * direction;

            if (newOpacity >= 1 || newOpacity <= 0) setDirection(direction * -1);

            return {
                opacity: Math.min(Math.max(newOpacity, 0), 1),
                scale: Math.min(Math.max(newScale, 0), 1),
            };
        });
    }

    const bgColor = useTransform(scrollYProgress, [0, 1], ["rgb(255,100,110)", "rgb(10,255,230)"]);

    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <>
            <motion.div
                style={{
                    backgroundColor: bgColor,
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                }}
            />

            <div className="flex flex-col items-center gap-6">
                <h1 className="pb-4 font-extrabold text-2xl font-sans">Framer Motion</h1>

                <card className="flex flex-col justify-center items-center gap-4 bg-gray-200 shadow-xl w-sm p-3 rounded-xl">

                    <h2 className="font-bold pb-3 text-3xl">Rotate & Enter</h2>

                    <motion.div
                        style={box}
                        animate={{ rotate }}
                        transition={{ duration: 1 }}
                        className="flex flex-row justify-center items-center"
                    >
                        <h2 className="text-white">Hello</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={enter}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", duration: 0.4, bounce: 0.5 },
                        }}
                        style={ball}
                    />

                    <button
                        onClick={handleRotate}
                        className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition-all"
                    >
                        Animate
                    </button>

                </card>

                <card className="flex flex-col justify-center items-center gap-4 bg-gray-200 shadow-xl w-sm p-3 rounded-xl">

                    <h2 className="font-bold pb-3 text-3xl">Gesture</h2>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        style={box}
                        onClick={() => console.log("Clicked")}
                    />

                </card>

                <div className="flex flex-col gap-6 min-h-screen">
                    {food.map(([emoji, hueA, hueB], i) => {
                        const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
                        return (
                            <div
                                key={i}
                                className="flex flex-col justify-center items-center gap-4 bg-gray-200 shadow-xl w-sm p-3 rounded-xl"
                            >
                                <motion.div
                                    className="overflow-hidden flex justify-center items-center relative pt-5 mb-[-120px] w-full"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <div style={{ ...splash, background }} />
                                    <motion.div
                                        style={card}
                                        variants={cardVariants}
                                        className="card"
                                    >
                                        {emoji}
                                    </motion.div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>



            </div>
        </>
    );
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
};

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
};


const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];