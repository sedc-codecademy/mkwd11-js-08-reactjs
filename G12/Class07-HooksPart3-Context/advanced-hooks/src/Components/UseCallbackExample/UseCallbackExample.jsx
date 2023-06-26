import { useCallback, useState } from "react";
import List from "../List/List";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightpink");

  //   Use callback will only store a new definition of this function when the dependancy changes hence it will not cause unnneded execution in list.jsx, use only when performance optimiziations such as this one are needed
  const generateArray = useCallback(() => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push(i);
    }

    return result;
  }, [number]);

  //   const generateArray = () => {
  //     const result = [];

  //     for (let i = 0; i <= number; i++) {
  //       result.push(i);
  //     }

  //     return result;
  //   };

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>useCallback</h1>
      <h2>{number}</h2>
      <button onClick={e => setNumber(Math.floor(Math.random() * 100000))}>
        Change Number
      </button>
      <button
        onClick={e =>
          setBgColor(prevColor =>
            prevColor === "lightpink" ? "lightyellow" : "lightpink"
          )
        }
      >
        Change Background
      </button>
      <List generateArray={generateArray} />
    </section>
  );
};

export default UseCallbackExample;
