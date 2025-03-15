import StudyPage from "../components/Study";

export default function Home() {
  return (
    <>
      {/* <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="container mx-auto mb-10"></div> */}
      <div className="laptop:mt-20 mt-10">
        <div className="mt-5">
          <h1
            //   ref="test"
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              "test"
            </h1>
        </div>
      </div>
      <StudyPage></StudyPage>
    </>
  );
}
