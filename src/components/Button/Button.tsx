import { ReactNode } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  children: ReactNode;
  // color: "primary" | "warning" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.alertShowButton}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
