import { useSections } from "../hooks/useSections.js";

export default function HomePage() {
  const { sections } = useSections();

  return (
    <>
      {sections.map(({ id, ref, Component }) => (
        <div key={id} ref={ref} id={id}>
          {Component && <Component />}
        </div>
      ))}
    </>
  );
}
