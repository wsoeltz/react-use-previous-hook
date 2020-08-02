# react-use-previous-hook

> Hook for using the previous value of props or state.

[![NPM](https://img.shields.io/npm/v/react-use-previous-hook.svg)](https://www.npmjs.com/package/react-use-previous-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### [View demo ↗](https://wsoeltz.github.io/react-use-previous-hook/)

## Install

```bash
npm install --save react-use-previous-hook
```

## Usage

```tsx
import React, {useState} from 'react'
import usePrevious from 'react-use-previous-hook'

const App = () => {
  const [count, setCount] = useState<number>(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h1>Previous count: {previousCount}</h1>
      <button onClick={() => setCount(count - 1)}>Count -</button>
      <button onClick={() => setCount(count + 1)}>Count +</button>
    </div>
  );
}

export default App

```

## License

MIT © [wsoeltz](https://github.com/wsoeltz)
