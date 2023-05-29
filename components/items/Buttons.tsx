import { HTMLAttributes } from "./Box";

export default function Button(props: HTMLAttributes) {
  const { sx, className, ref, children, onClick } = props;
  return (
    <button
      style={sx}
      ref={ref}
      onClick={onClick}
      className={`flex ${className}`}
    >
      <>{children}</>
    </button>
  );
}
