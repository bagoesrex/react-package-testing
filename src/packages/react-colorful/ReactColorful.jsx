import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import './ReactColorful.css';

export default function ReactColorful() {
    const [color, setColor] = useState("#aabbcc");

    return (
        <>
            <div className="flex flex-col items-center custom-colorful custom-colorful__saturation">
                <h1 className="pb-10 font-extrabold font-sans" style={{ color: color }}>React Colorful</h1>

                <HexColorPicker color={color} onChange={setColor} />

                <div className="value my-3" style={{ borderLeftColor: color }}>
                    Current color is <span className="font-bold"> {color} </span>
                </div>

                <div className="buttons *:mx-2">
                    <button onClick={() => setColor("#c6ad23")} className="text-amber-50" style={{ backgroundColor: "#c6ad23" }}>Choose gold</button>
                    <button onClick={() => setColor("#556b2f")} className="text-amber-50" style={{ backgroundColor: "#556b2f" }}>Choose green</button>
                    <button onClick={() => setColor("#207bd7")} className="text-amber-50" style={{ backgroundColor: "#207bd7" }}>Choose blue</button>
                </div>
            </div>
        </>
    )
}