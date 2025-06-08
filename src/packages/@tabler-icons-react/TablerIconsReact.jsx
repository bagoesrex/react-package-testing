import { IconHelicopterLanding } from '@tabler/icons-react';
import { useState } from 'react';

export default function TablerIconsReact() {
    const [isClicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(prev => !prev);
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="pb-10 font-extrabold font-sans">Tabler Icons React</h1>
                <h2 className="pb-10 font-extrabold font-sans">{isClicked && "Hello"}</h2>
                <button onClick={handleClick}><IconHelicopterLanding color="gray" size={25} stroke={3}/></button>
            </div>
        </>
    )
}