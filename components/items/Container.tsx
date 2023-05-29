import { cx } from "@emotion/css";

export default function Container(props) {
  const { children, className } = props;
  const divProps = {
    ...props,
    className: cx("mx-auto max-w-7xl py-6 sm:px-6 lg:px-8", className),
  };
  return <div {...divProps}>{children}</div>;
}
