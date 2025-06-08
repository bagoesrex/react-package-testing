# React Cropper

A simple React component for <b>cropping images</b> using [`react-cropper`](https://www.npmjs.com/package/react-cropper) and [`cropperjs`](https://www.npmjs.com/package/cropperjs).

## Important Notes

- Since `react-cropper` is a React wrapper around `cropperjs`, you need to <b>install both packages. </b>
- Make sure to import `cropperjs` CSS (`cropper.css`) to ensure proper styling.

## Features

- Crop images with customizable aspect ratio
- Live preview of cropped image
- Responsive and easy to use
- Supports drag and zoom controls
- Based on the powerful cropperjs library

> ⚠️ Note: Croner is primarily designed for Node.js environments. Use in React (browser) only for experimentation, as tasks will run as long as the component is mounted.

## Quick examples

```javascript
import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function ImageCropper() {
  const cropperRef = useRef(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <>
      <Cropper
        src="your-image.jpg"
        style={{ height: 400, width: "100%" }}
        initialAspectRatio={16 / 9}
        guides={false}
        crop={onCrop}
        ref={cropperRef}
      />
      {croppedImage && <img src={croppedImage} alt="Cropped Result" />}
    </>
  );
}
```
