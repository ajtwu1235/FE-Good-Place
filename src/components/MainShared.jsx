import "./main.css";
import { getStorage, listAll, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

const MainShared = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const storage = getStorage();

  const getImageUrls = async () => {
    try {
      const imageFolderRef = ref(storage, "main");
      const imageItems = await listAll(imageFolderRef);

      const urls = await Promise.all(
        imageItems.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        }),
      );

      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching image URLs from Firebase:", error);
    }
  };

  useEffect(() => {
    getImageUrls();
  }, []);

  return (
    <>
      <div className="main_container">
        <p className="main_title">Shared photos</p>
        <div className="photoBox">
          {imageUrls.map((url, index) => (
            <img
              width="380px"
              height="486px"
              key={index}
              className="photo_img"
              src={url}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainShared;
