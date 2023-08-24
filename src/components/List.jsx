import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
const ListPage = () => {
  const [data, setData] = useState([]);

  const getData = () =>
    axios.get("http://localhost:8080/api/v1/client?size=8").then((response) => {
      console.log(response.data);
      setData(response.data.content);
    });

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="StoryListBox">
        <div className="story_container">
          <div className="story_wrap">
            <div className="topTitleStyle">
              <p>믿고보는 맛집 리스트</p>
            </div>

            <div className="buttonList">
              <button className="buttonStyle"># 제주</button>
              <button className="buttonStyle"># 분식</button>
              <button className="buttonStyle"># 집밥</button>
            </div>

            {/* 여기서부터 한줄 시작 */}
            <div className="flexRow">
              {data.map((el) => (
                <div key={el.id}>
                  {" "}
                  {/* Make sure to include a unique key */}
                  <p className="titleStyle">{el.address}</p>
                  <p className="subTitleStyle">{el.name}</p>
                  <a href={`/page_detail/${el.placeId}`}>
                    {" "}
                    {/* Include the placeId in the link */}
                    <img src="images/sunflower.png" alt="sunflower" />
                  </a>
                </div>
              ))}
            </div>

            {/* 여기서 한줄 끝 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
