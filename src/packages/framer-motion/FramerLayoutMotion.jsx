import { motion } from "framer-motion"
import { AnimatePresence } from "motion/react"
import { useState } from "react"

export default function FramerLayoutMotion() {
    const [isOn, setIsOn] = useState(false)
    const toggleSwitch = () => setIsOn(!isOn)

    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="pb-10 font-extrabold font-sans">Framer Layout Animation</h1>

                <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 shadow-xl w-sm p-3 rounded-xl">

                    <h2 className="font-bold pb-3 text-3xl">Layout Animation</h2>

                    <button
                        className="toggle-container"
                        style={{
                            ...container,
                            justifyContent: "flex-" + (isOn ? "start" : "end"),
                        }}
                        onClick={toggleSwitch}
                    >
                        <motion.div
                            className="toggle-handle"
                            style={handle}
                            layout
                            transition={{
                                type: "spring",
                                visualDuration: 0.2,
                                bounce: 0.2,
                            }}
                        />
                    </button>
                </div>

                <div style={containers} className="mt-10">
                    <nav style={nav}>
                        <ul style={tabsContainer}>
                            {tabs.map((item) => (
                                <motion.li
                                    key={item.label}
                                    initial={false}
                                    animate={{
                                        backgroundColor:
                                            item === selectedTab ? "#eee" : "#eee0",
                                    }}
                                    style={tab}
                                    onClick={() => setSelectedTab(item)}
                                >
                                    {`${item.icon} ${item.label}`}
                                    {item === selectedTab ? (
                                        <motion.div
                                            style={underline}
                                            layoutId="underline"
                                            id="underline"
                                        />
                                    ) : null}
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <main style={iconContainer}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab ? selectedTab.label : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={icon}
                            >
                                {selectedTab ? selectedTab.icon : "😋"}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </>
    )
}

const container = {
    width: 100,
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
};

const handle = {
    width: 30,
    height: 30,
    backgroundColor: "#167eb3",
    borderRadius: "50%",
};

const containers = {
    width: 480,
    height: "60vh",
    maxHeight: 360,
    borderRadius: 10,
    background: "white",
    overflow: "hidden",
    boxShadow:
        "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
    display: "flex",
    flexDirection: "column",
}

const nav = {
    background: "#fdfdfd",
    padding: "5px 5px 0",
    borderRadius: "10px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: "1px solid #eeeeee",
    height: 44,
}

const tabsStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontWeight: 500,
    fontSize: 14,
}

const tabsContainer = {
    ...tabsStyles,
    display: "flex",
    width: "100%",
}

const tab = {
    ...tabsStyles,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "100%",
    padding: "10px 15px",
    position: "relative",
    background: "white",
    cursor: "pointer",
    height: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
    userSelect: "none",
    color: "#0f1115",
}

const underline = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: "var(--accent)",
}

const iconContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
}

const icon = {
    fontSize: 128,
}

const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" },
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]