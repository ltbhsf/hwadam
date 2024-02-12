import Container from "./Container";

export default function Sigoto({ id, focusedWork, workList, onFocusChanged }) {
  const focusHandler = (id) => {
    console.log(id);
  };
  return (
    <>
      <h1
        id={id}
        className="text-3xl font-bold text-gray-900 sm:text-[2.3rem] mb-5 lg:mb-10"
      >
        주요 업무
      </h1>
      <section className="flex flex-col lg:flex-row lg:gap-4 mb-32 lg:justify-center items-center">
        {workList.map((work) => (
          <Container
            key={work.name}
            id={work.id}
            title={work.name}
            content={work.content}
            isFocused={focusedWork == work.id}
            onFocusChanged={onFocusChanged}
          />
        ))}
      </section>
    </>
  );
}
