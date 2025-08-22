import { useScrollSpy } from "../hooks/useScrollSpy";

export default function HomePage({ sections, sectionRefs }) {
  useScrollSpy(sectionRefs);
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
