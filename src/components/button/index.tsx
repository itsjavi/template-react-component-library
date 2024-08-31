import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({
  type = "button",
  children,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
