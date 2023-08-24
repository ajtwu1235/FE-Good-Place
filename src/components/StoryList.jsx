import "./story.css";
import { useEffect, useState } from "react";
import axios from "axios";
const StoryList = () => {
  const StoryListBox = {
    width: "442px",
    display: "flex",
    flexDirection: "column",
    marginTop: "70px",
  };

  const titleStyle = {
    fontSize: "20px",
  };

  const subTitleStyle = {
    fontSize: "28px",
    fontStyle: "normal",
    fontFamily: "Gowun Dodum",
    color: "#1E1E1E",
  };

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
      <div style={StoryListBox}>
        <div style={StoryListBox}>
          {data.map((el) => (
            <div key={el.id}>
              <p style={titleStyle}>{el.address}</p>
              <p style={subTitleStyle}>{el.name}</p>
              <img src="images/sunflower.png"></img>
              <p>{el.myReview}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoryList;
