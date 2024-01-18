import stylex from "@stylexjs/stylex";

type ComponentProps = {
  children: any;
  variant?: string;
  isLarge?: boolean;
  styles?: any;
  opacity?: number;
};

const style = stylex.create({
  base: {
    fontSize: "1.5rem",
  },
  primary: {
    color: "pink",
  },
  greenYellow: {
    color: "greenyellow",
  },
  blue: {
    color: "blue",
    fontSize: null,
  },
  large: {
    fontSize: "3rem",
  },
  dynamic: (value) => ({
    opacity: value,
  }),
});

export default function Component({
  children,
  variant = "primary",
  isLarge = false,
  opacity = 1,
  styles,
}: ComponentProps) {
  return (
    <h1
      {...stylex.props(
        style.base,
        style[variant],
        isLarge && style.large,
        style.dynamic(opacity),
        styles,
      )}
    >
      {children}
    </h1>
  );
}
