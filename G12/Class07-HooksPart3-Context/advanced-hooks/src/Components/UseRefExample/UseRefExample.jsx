import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [rerenderToggle, setRerenderToggle] = useState(false);
  const [count, setCount] = useState(0);

  let rerenderCount = 0;
  const rerenderCountRef = useRef(0);

  const addToRerenderCount = () => {
    console.log("rerender ref", rerenderCountRef);
    rerenderCount++;
    rerenderCountRef.current++;
    setRerenderToggle(!rerenderToggle);
  };

  //   console.log(rerenderCount);
  //   console.log(rerenderCountRef.current);

  const intervalIdRef = useRef(0);

  const startStopwatch = () => {
    setCount(0);
    intervalIdRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    console.log("From start", intervalIdRef.current);
  };

  const resetStopwatch = () => {
    console.log("From reset", intervalIdRef.current);

    clearInterval(intervalIdRef.current);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(inputRef);

  return (
    <section>
      <h1>useRef</h1>
      <div>
        <button onClick={e => addToRerenderCount()}>Rerender Component</button>
      </div>
      <div>
        <div>
          <h1>{count}</h1>
          <button onClick={e => startStopwatch()}>START</button>
          <button onClick={e => resetStopwatch()}>END</button>
        </div>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={e => {
            inputRef.current.focus();
          }}
        >
          Focus Input
        </button>
        <button
          onClick={e => {
            // Avoid changing input values with ref and only use state to control inputs , not refs
            inputRef.current.value = "";
          }}
        >
          Reset Input
        </button>
      </div>
    </section>
  );
};

export default UseRefExample;
