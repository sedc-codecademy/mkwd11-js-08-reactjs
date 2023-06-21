import { useRef, useEffect } from "react";

export const UseRefExample = () => {
  const inputRef = useRef(null);

  // DONT DO THIS, ITS REALLY BAD PRACTICE
  const handleChangeText = () => {
    console.log(inputRef);
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>UseRef example</h2>

      <input
        type="text"
        ref={inputRef}
        onChange={handleChangeText}
        placeholder="Enter your email..."
      />
    </div>
  );
};
