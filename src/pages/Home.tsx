import React from "react";
import StudyPage from "../components/Study";
import TestPage from "../components/Test";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <StudyPage />
      {/* <TestPage /> */}
    </div>
  );
};

export default Home;
