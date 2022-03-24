import { css, cx } from "@emotion/css";
import { CSSProperties } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  styles?: CSSProperties;
  hoverStyles?: CSSProperties;
}

export const Box = ({ styles, hoverStyles, children }: Props) => (
  <div
    className={cx(
      css({
        ...styles,
        "&:hover": {
          ...hoverStyles,
        },
      })
    )}
  >
    {children}
  </div>
);

Box.displayName = "Box";
