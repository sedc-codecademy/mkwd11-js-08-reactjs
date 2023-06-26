import { useEffect, useState } from "react";

export const About = () => {
  const [message, setMessage] = useState("");

  /**
   * COMPONENT DID MOUNT
   * RUNS ONLY ON THE FIRST RENDER
   */
  useEffect(() => {
    console.log("FIRST RENDER USE EFFECT");
    // Here we can make api call
  }, []);

  /**
   * COMPONENT DID UPDATE
   * RUNS ON FIRST RENDER, AND ON EACH CHANGE OF ANY VALUE IN THE DEPS ARRAY
   */
  useEffect(() => {
    console.log("I will execute ...");
  }, [message]);

  /**
   * WITHOUT DEPENDENCY ARRAY
   * RUNS ON EVERY RENDER
   * CAREFUL!!!
   */
  // useEffect(() => {
  //   console.log("On every re-render");
  // });

  // COMPONENT WILL UNMOUNT
  // DESTROY THE COMPONENT
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Heavy calculation logic");
    }, 1000);

    //THIS RETURN CALLBACK WILL EXECUTE WHEN WE LEAVE THE COMPONENT
    //USED TO UNSUBSCRIBE OR KILL HEAVY COMPUTATIONS
    //MAYBE RESET SOMETHING IN A STATE ETC.
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMessage = (value) => {
    setMessage(value);
  };

  return (
    <div>
      <h1>About page</h1>
      <h4>{message}</h4>
      <input
        type="text"
        value={message}
        onChange={(event) => handleMessage(event.target.value)}
      />
    </div>
  );
};
