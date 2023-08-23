import MyHeader from "./MyHeader";
import "./List.css";
import {useEffect, useState} from "react";
import axios from "axios";
const ListPage = () => {

  const [data,setData] = useState([]);

  const getData =()=>axios.get('http://localhost:8080/api/v1/client?size=8')
      .then(response =>{
        console.log(response.data)
        setData(response.data.content)
      })

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <>
      <MyHeader></MyHeader>

      <div></div>

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
          </div>

          {/* 여기서부터 한줄 시작 */}
          <div className="flexRow">
            
        {data.map(el=>
          <div>
          <p className="titleStyle">{el.address}</p>
          <p className="subTitleStyle">{el.name}</p>
          <img src="images/sunflower.png"></img>
        </div>
          )}
          </div>
        </div>

        {/* 여기서 한줄 끝 */}

      </div>
    </>
  );
};

export default ListPage;
