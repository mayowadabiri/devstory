import Link from "next/link";

export const Button = ({ children, onclick, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={onclick}>
      {children}
    </button>
  );
};
