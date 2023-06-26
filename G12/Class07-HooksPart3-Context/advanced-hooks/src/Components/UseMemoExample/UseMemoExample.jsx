import { useMemo, useState } from "react";

const longCalculation = number => {
  for (let i = 0; i < 1000000000; i++) {}

  return number * number;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightblue");

  const multipliedNumber = useMemo(() => longCalculation(number), [number]);

  //   const multipliedNumber = longCalculation(number);

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>useMemo</h1>
      <h1>{number}</h1>
      <h1>{multipliedNumber}</h1>
      <button onClick={e => setNumber(Math.floor(Math.random() * 100))}>
        Change Number
      </button>
      <button
        onClick={e =>
          setBgColor(prevColor =>
            prevColor === "lightblue" ? "lightgreen" : "lightblue"
          )
        }
      >
        Change Background
      </button>
    </section>
  );
};

export default UseMemoExample;
