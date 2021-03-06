import { css, cx } from "@emotion/css";
import { CSSObject } from "@emotion/react";
import { CSSProperties } from "react";

interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    Pick<
      CSSProperties,
      | "flexDirection"
      | "alignItems"
      | "gap"
      | "justifyContent"
      | "flexGrow"
      | "flexWrap"
    > {
  styles?: CSSObject;
  hoverStyles?: CSSProperties;
}

export const Stack = ({
  flexDirection = "column",
  gap = "1rem",
  alignItems,
  justifyContent,
  flexGrow,
  flexWrap,
  styles,
  hoverStyles,
  children,
}: Props) => (
  <div
    className={cx(
      css({
        display: "flex",
        flexDirection,
        gap,
        alignItems,
        justifyContent,
        flexGrow,
        flexWrap,
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

Stack.displayName = "Stack";
