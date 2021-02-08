import Link from "next/link";

export const Button = ({ children, onclick }) => {
  return (
    <button className="button" onClick={onclick}>
      {children}
    </button>
  );
};
