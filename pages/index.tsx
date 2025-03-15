import { useRef } from "react";
import StudyPage from "../components/Study";
import Header from "../components/Header";


export default function Home() {
  // const workRef = useRef<HTMLDivElement | null>(null);
  // const aboutRef = useRef<HTMLDivElement | null>(null);


  //   // Handling Scroll # Header component에 사용되는 function으로 web page상단에 stick되는 부분관련 코드니까, 아마 붙지않을까? 
  //   const handleWorkScroll = () => {
  //     window.scrollTo({
  //       top: workRef.current ? workRef.current.offsetTop : 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   };
  
  //   const handleAboutScroll = () => {
  //     window.scrollTo({
  //       top: aboutRef.current ? aboutRef.current.offsetTop : 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   };
  return (
  //     <>
  //     {/* <div className={`relative ${data.showCursor && "cursor-none"}`}> */}
  //     {/* {data.showCursor && <Cursor />} */}
  //     {/* <Head>
  //       <title>test</title>
  //     </Head> */}

  //     <div className="gradient-circle"></div>
  //     <div className="gradient-circle-bottom"></div>

  //     <div className="container mx-auto mb-10">
  //       <Header
  //         handleWorkScroll={handleWorkScroll}
  //         handleAboutScroll={handleAboutScroll} isBlog={undefined}        />
  //       <div className="laptop:mt-20 mt-10">
  //         <div className="mt-5">
  //           <h1
  //             // ref={textOne}
  //             className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
  //           >
  //             test
  //           </h1>
  //       </div>
  //     </div>
  //   </div>
  //   <StudyPage />
  //  </>



    <>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="container mx-auto mb-10"></div>
      <div className="laptop:mt-20 mt-10">
        <div className="mt-5">
          <h1
            //   ref="test"
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              "test"
            </h1>
        </div>
        <p> global css test</p>
      </div>
      <StudyPage></StudyPage>
    </>
  );
}
