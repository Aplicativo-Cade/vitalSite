export default function PhraseBand({ dark = false, children }) {
  return <div className={dark ? "phrase dark" : "phrase"}>{children}</div>;
}