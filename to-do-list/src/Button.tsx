import { FC } from "react";
import "./Button.css";

type ButtonProps = {
  buttonClass: string;
  buttonText: string;
};

const Button: FC<ButtonProps> = () => {
  let text = document.getElementsByClassName("wrapper__input").value;
  return text;
};

export default Button;
// const Button: FC<ButtonProps> = ({ buttonClass, buttonText }) => {

// return <button className={buttonClass}>{buttonText}</button>;