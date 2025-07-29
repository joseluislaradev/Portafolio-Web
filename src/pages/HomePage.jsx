
export function HomePage({ sections }) {
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
