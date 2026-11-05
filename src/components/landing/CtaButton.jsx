import { CHECKOUT_URL } from "@/data/vital";

export default function CtaButton({ children, sub, className = "" }) {
  return (
    <a
      className={`btn ${className}`.trim()}
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {sub ? <small>{sub}</small> : null}
    </a>
  );
}