# @Tabler Icons React

A simple React demo showcasing the use of [`@tabler/icons-react`](https://www.npmjs.com/package/@tabler/icons-react), an icon library built for React and based on Tabler Icons.

## Quick examples

```javascript
import { IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';

export default function TablerIconsReact() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-10 font-extrabold font-sans">Tabler Icons React</h1>
      <h2 className="pb-10 font-extrabold font-sans">{isClicked && "Hello"}</h2>
      <button onClick={handleClick}>
        <IconArrowLeft color={red} size={32} stroke={2} /> // an Example
      </button>
    </div>
  );
}
```

## Props

| Name   | Type   | Default       |
|--------|--------|---------------|
| size   | Number | 24            |
| color  | String | currentColor  |
| stroke | Number | 2             |
