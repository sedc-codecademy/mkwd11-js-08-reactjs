import { useState, useMemo } from "react";

const longCalculation = (number) => {
  console.log("Oh lord.. doing long calculation");

  let longNumber = 0;

  for (let i = 0; i < 2000000000; i++) {
    longNumber += i;
  }

  return longNumber * number;
};

export const UseMemoExample = () => {
  const [hexColor, setHexColor] = useState("#0000FF");
  const [number, setNumber] = useState(2);

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return `#${randomColor}`;
  };

  const handleGenerateColor = () => {
    const colorGenerated = generateRandomColor();

    setHexColor(colorGenerated);
  };

  const handleSetNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    setNumber(randomNumber);
  };

  // *** WITHOUT USEMEMO PROBLEM ***
  // const result = longCalculation(number);
  // console.log("expensive computation result is: ", result);

  // *** WITH USEMEMO SOLVING THE ISSUE ***
  // usememo will recalculate if value of it's deps array is changed
  // in our case that is number
  const result = useMemo(() => longCalculation(number), [number]);
  console.log("expensive computation result is: ", result);

  return (
    <div>
      <h2>Use Memo</h2>

      <div
        style={{
          backgroundColor: hexColor,
          width: "250px",
          height: "250px",
        }}
      ></div>

      <br />
      <button onClick={handleGenerateColor}>Change Color</button>
      <button onClick={handleSetNumber}>Change number</button>
    </div>
  );
};
