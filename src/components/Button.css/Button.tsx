import { MouseEvent } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ text, onClick, type = "button" }: ButtonProps) {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      <span className={classes.text}>{text}</span>
    </button>
  );
}
