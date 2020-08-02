import React, {useState} from 'react'
import usePrevious from 'react-use-previous-hook'

const App = () => {
  const [count, setCount] = useState<number>(0);

  const previousCount = usePrevious(count);

  return (
    <>
      <h1>Current count: {count}</h1>
      <h1>Previous count: {previousCount}</h1>
      <button onClick={() => setCount(count - 1)}>Count -</button>
      <button onClick={() => setCount(count + 1)}>Count +</button>
    </>
  );
}

export default App
