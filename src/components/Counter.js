import { useState } from 'react';

function Counter() {
  const [Count, setCount] = useState(0);

  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount((prevState) => prevState + 1);
      i += 1;
    }
  };
  let j = 0;
  const addTen = () => {
    while (j < 10) {
      setCount((prevState) => prevState + 1);
      j += 1;
    }
  };
  return (
    <div>
      {Count}
      <p>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Add Plus 1
        </button>
      </p>
      <p>
        <button type="button" onClick={addFive}>
          Add Plus 5
        </button>
      </p>
      <p>
        <button type="button" onClick={addTen}>
          Add Plus 10
        </button>
      </p>
    </div>
  );
}
export default Counter;
