import { useState } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  label?: string;
};

const Button = ({ label = "Click me" }: ButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className={classes.button}
        role="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        {label} - {count}
      </button>
    </div>
  );
};

export default Button;
