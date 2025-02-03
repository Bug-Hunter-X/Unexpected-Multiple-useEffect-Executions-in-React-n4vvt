```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const firstRender = useRef(true);

  useEffect(() => {
    // This effect runs only once on mount
    if (firstRender.current) {
      console.log('Mounted!');
      firstRender.current = false;
    }
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```