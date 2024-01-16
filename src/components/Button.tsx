import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  color: "primary" | "warning" | "secondary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: IButtonProps) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </div>
  );
};

export default Button;
