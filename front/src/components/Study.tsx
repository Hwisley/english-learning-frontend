import React, { useState } from "react";

const StudyPage: React.FC = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="container">
      {/* Embedded text */}
      <p className="text-xl font-semibold text-center">도널드 트럼프 대통령이 틱톡 금지 조치를 연기하겠다고 발표한 후, 미국 내 틱톡 사용자들은 일요일에 다시 앱을 사용할 수 있게 되었다.</p>

      {/* Input Text Box */}
      <input
        type="text"
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Recall and enter the correct English sentence you learned..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* Korean Paragraph */}
      <p className="max-w-md text-center text-gray-700">
        {"월요일, 그는 75일 동안 금지를 연기하는 행정 명령에 서명했다.\n토요일 밤, 틱톡은 약 14시간 동안 서비스를 중단하며 약 1억 7천만 명의 미국 사용자의 접속을 차단했다.\n지난해, 미국 의회는 중국 기업이 미국인의 정보를 어떻게 사용하는지에 대한 보안 우려로 틱톡을 금지하는 법안을 통과시켰다. 이에 대해 틱톡과 중국 모기업 바이트댄스는 미국 정부를 상대로 소송을 제기했으며, 이 사건은 대법원으로 갔고, 지난주 대법원은 금지 조치를 유지하기로 판결했다.\n“우리가 원하는 것은 중국이 미국인을 감시하지 않는 것입니다. 우리는 중국이 젊은 세대에 영향을 미치는 것을 원하지 않습니다.”\n이 법안에 따르면, 미국 의회는 틱톡의 모기업에 1월 19일까지 미국이나 동맹국의 기업에 앱을 매각하지 않으면 차단될 것이라고 경고했다. 이러한 이유로 틱톡은 서비스를 중단했으며, 비즈니스 용도로 틱톡을 활용하는 조앤 몰리나로 같은 사용자들은 이에 분노했다.\n“저는 틱톡을 통해 4년 반 동안 구축한 커뮤니티와 계속 소통해야 합니다.”\n사용자들은 다시 틱톡에 접속할 수 있게 되었지만, 이는 영구적인 조치가 아닐 수도 있다. 트럼프의 행정명령에 따르면, 그는 틱톡을 강제 매각하거나 폐쇄할 권한을 자신에게 부여했다.\n“대통령은 이 문제의 해결책을 찾는 데 더욱 진지해져야 합니다. 우리는 틱톡을 유지하고 싶지만, 국가 안보 문제를 해결해야 합니다.”\n바이트댄스가 틱톡 매각을 거부한다면, 미국에서 다시 서비스가 중단될 수도 있다."
          .split("\n")
          .map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </p>
    </div>
  );
};

export default StudyPage;
