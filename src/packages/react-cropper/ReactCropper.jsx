import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function ReactCropper() {
    const cropperRef = useRef(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const imageSrc = "/megu.jpeg";

    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        console.log(cropper.getCroppedCanvas().toDataURL());
    };

    const onCropClick = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            const croppedDataUrl = cropper.getCroppedCanvas().toDataURL();
            setCroppedImage(croppedDataUrl);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="pb-5 font-extrabold font-sans">React Cropper</h1>

                {/* Cropper dengan gambar */}
                <div className="w-80 h-48">
                    <Cropper
                        src={imageSrc}
                        style={{ height: "100%", width: "100%" }}
                        initialAspectRatio={16 / 9}
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                    />
                </div>

                {/* Tombol Crop */}
                <button
                    onClick={onCropClick}
                    className="mt-8 px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700 transition"
                >
                    Crop
                </button>

                {/* Preview hasil crop */}
                {croppedImage && (
                    <div className="mt-8">
                        <h2 className="font-semibold mb-2">Hasil Crop:</h2>
                        <img
                            src={croppedImage}
                            alt="Hasil Crop"
                            className="rounded-xl border border-gray-300"
                            style={{ maxWidth: "320px", maxHeight: "180px" }}
                        />
                    </div>
                )}
            </div>


            {/* <Cropper
                src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
                style={{ height: 400, width: "100%" }}
                initialAspectRatio={16 / 9}
                guides={false}
                crop={onCrop}
                ref={cropperRef}
            /> */}
        </>
    )
}