import "./story.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
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
  const [imageUrls, setImageUrls] = useState([]);
  const storage = getStorage();
  const userId = localStorage.getItem("userId");
  const getData = () =>
    axios
      .get("http://localhost:8080/api/v1/recommend/" + userId)
      .then((response) => {
        console.log(response.data);
        const storeDataArray = response.data.map((item) => item.store); // Extract the 'store' object from each item
        setData(storeDataArray);
        console.log("set data : ", storeDataArray);
      });
  const getImageUrls = async () => {
    try {
      const urls = await Promise.all(
        data.map(async (el) => {
          const imageRef = ref(storage, `${el.placeId}`);
          const imageList = await list(imageRef);

          if (imageList.items.length > 0) {
            const firstImageRef = imageList.items[0];
            const url = await getDownloadURL(firstImageRef);
            return url;
          }

          return null;
        }),
      );
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching image URLs from Firebase:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getImageUrls(); // Fetch image URLs after data is fetched
  }, [data]); // Trigger fetching image URLs whenever data changes

  console.log(data);
  console.log(imageUrls);
  console.log(data);
  return (
    <>
      <div style={StoryListBox}>
        <div style={StoryListBox}>
          {data.map((el, index) => (
            <div key={el.id}>
              <p style={titleStyle}>{el.address}</p>
              <p style={subTitleStyle}>{el.name}</p>
              <a href={`/page_detail/${el.placeId}`} className="photo_size">
                <img src={imageUrls[index]} alt="sunflower" />
              </a>
              <p>{el.myReview}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoryList;
