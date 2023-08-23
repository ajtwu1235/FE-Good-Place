import "../../css/mainTeam.css";
import { useState } from "react";
import { TEAM_DATA } from "../../data/TEAM_DATA";

const MainTeam = () => {
  const [mainTeamText, setMainTeamText] = useState(TEAM_DATA[0].text);

  const changeText = (data) => {
    setMainTeamText(data.text);
  };
  return (
    <>
      <div className="main_container">
        <p className="main_title">WHO'S ON OUR TEAM ?</p>
        <div className="team_wrap">
          <div className="teamBox">
            <p className="team_text">{mainTeamText}</p>
            <div className="team_box">
              {TEAM_DATA.map((data) => {
                return (
                  <button
                    className="team_person"
                    onClick={() => {
                      changeText(data);
                    }}
                    name={data.name}
                    key={data.id}
                  >
                    <img src="/images/team1.svg" alt=""></img>
                    <p className="team_name">{data.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <img className="team_big_img" src="/images/team1.svg" alt=""></img>
        </div>
      </div>
    </>
  );
};
export default MainTeam;
