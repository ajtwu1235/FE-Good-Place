import "./main.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";

const MainPopular = () => {
  const [data, setData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const storage = getStorage();
  const getData = () =>
    axios
      .get("http://192.168.0.172:8080/api/v1/client?size=3")
      .then((response) => {
        console.log(response.data);
        setData(response.data.content);
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

  return (
    <>
      <div className="main_container">
        <p className="main_title">popular restaurant</p>
        <div className="popularBox">
          {data.map((el, index) => (
            <div className="popular_box" key={el.id}>
              <img className="popular_img" src={imageUrls[index]} alt=""></img>
              <div className="popular_text">
                <p className="popular_text_name">{el.name}</p>
                <p className="popular_text_address">{el.address}</p>
              </div>
            </div>
          ))}
          {/*<div className="popular_box">*/}
          {/*  <img className="popular_img" src="/images/6.png" alt=""></img>*/}
          {/*  <p className="popular_text_name">식당 이름</p>*/}
          {/*  <p className="popular_text_address">식당 주소</p>*/}
          {/*</div>*/}
          {/*<div className="popular_box">*/}
          {/*  <img className="popular_img" src="/images/7.png" alt=""></img>*/}
          {/*  <p className="popular_text_name">식당 이름</p>*/}
          {/*  <p className="popular_text_address">식당 주소</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};
export default MainPopular;
