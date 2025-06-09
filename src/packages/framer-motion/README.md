# Framer Motion

[`framer-motion`](https://www.npmjs.com/package/framer-motion) is a React animation library with a hybrid engine, combining the power of JavaScript animations with the performance of native browser APIs.

## Quick examples

- Basic

```javascript
import { motion } from "framer-motion";

const Box = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#3498db",
        borderRadius: 10,
      }}
    />
  );
};
```

- Gesture Animation (Hover & Tap)

```javascript
<motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  style={{
    width: 100,
    height: 100,
    backgroundColor: "#e74c3c",
    borderRadius: 10,
  }}
/>
```

- Scroll-Based Animation

```javascript
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        width: 300,
        height: 200,
        backgroundColor: "#2ecc71",
        margin: "100vh auto",
      }}
    >
      Scroll Me
    </motion.div>
  );
};
```

- Layout Animation

```javascript
import { useState } from "react";
import { motion } from "framer-motion";

const ToggleBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            width: 200,
            height: 100,
            backgroundColor: "#9b59b6",
            marginTop: 10,
          }}
        />
      )}
    </motion.div>
  );
};
```
