import './FontsourceRoboto.css';

import "@fontsource/roboto"; // Import default weight (400)
// import "@fontsource/roboto/300.css"; // Light
// import "@fontsource/roboto/400.css"; // Regular
// import "@fontsource/roboto/500.css"; // Medium
// import "@fontsource/roboto/700.css"; // Bold

export default function FontsourceRoboto() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="pb-10 font-extrabold font-roboto">Fontsource Roboto</h1>
                <h1 className="pb-10 font-extrabold">Fontsource Roboto</h1>
            </div>
        </>
    )
}