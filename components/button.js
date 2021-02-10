import Link from "next/link";

export const Button = ({ children, onclick, disabled, extra }) => {
  return (
    <button disabled={disabled} className={["button", extra].join(" ")} onClick={onclick}>
      {children}
    </button>
  );
};
