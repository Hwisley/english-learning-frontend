import React from "react";
import StudyPage from "../components/Study";
import TestPage from "../components/Test";

const Home: React.FC = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-50 gap-y-10">
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 gap-y-10">

      <StudyPage />
      {/* <TestPage /> */}
    </div>
  );
};

export default Home;
