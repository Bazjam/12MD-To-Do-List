import { FC } from "react";
import "./Button.css";

type ButtonProps = {
  buttonClass: string;
  buttonText: string;
};

const Button: FC<ButtonProps> = ({ buttonClass, buttonText }) => {
  return <button className={buttonClass}>{buttonText}</button>;
};

export default Button;
