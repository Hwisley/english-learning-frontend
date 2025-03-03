import React from "react";

const TestPage: React.FC = () => {
  const data = {
    eng_script: ["aaa", "bbb", "ccc"],
    kor_script: ["ㄱㄱㄱ", "ㄴㄴㄴ", "ㄷㄷㄷ"],
  };

  return (
    <div className="container mx-auto p-4">
      {/* English Script */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
        <p className="max-w-md mx-auto text-center text-gray-700">
          {data.eng_script.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Korean Script */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <p className="max-w-md mx-auto text-center text-gray-700">
          {data.kor_script.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TestPage;