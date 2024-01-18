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
      <Component content="Component A" />
      <Component content="Component B" variant="greenYellow" isLarge={true} />
      <Component content="Component C" variant="blue" />
      <Component content="Component D" styles={s.button} />
      <Component content="Component E" variant="greenYellow" opacity={0.2} />
    </main>
  );
}
