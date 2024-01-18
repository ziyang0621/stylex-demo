import stylex from "@stylexjs/stylex";
import Component from "./component";

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 20,
  },
  button: {
    backgroundColor: "black",
  },
});

export default function Home() {
  return (
    <main className={stylex(s.main)}>
      <Component>Component A</Component>
      <Component variant="greenYellow" isLarge={true}>
        Component B
      </Component>
      <Component variant="blue">Component C</Component>
      <Component styles={s.button}>Component D</Component>
      <Component variant="greenYellow" opacity={0.2}>
        Component E
      </Component>
    </main>
  );
}
