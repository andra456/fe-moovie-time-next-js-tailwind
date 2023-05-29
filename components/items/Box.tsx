import React from "react";

export interface HTMLAttributes {
  sx?: object;
  className?: string;
  ref?: any;
  children: JSX.Element | any;
  onClick?: (e: any) => void;
  disabled?: boolean;
}
export default function Box(props: HTMLAttributes) {
  const { sx, className, ref, children } = props;
  return (
    <div style={sx} ref={ref} className={`flex ${className}`}>
      <>{children}</>
    </div>
  );
}
