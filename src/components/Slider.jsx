import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Information from "./Information";
import DetailReview from "./DetailReview";
import DetailComment from "./DetailComment";
import DetailCommentInput from "./DetailCommentInput";
import { useParams } from "react-router";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import "./detail.css";
import firebaseConfig from "./FirebaseConfig"; // Import the FirebaseConfig component
import { initializeApp } from "firebase/app"; // Import initializeApp directly from "firebase/app"

// Initialize Firebase using the configuration from FirebaseConfig
initializeApp(firebaseConfig);
// Initialize Firebase
// Initialize Firebase

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
// const sliderImageUrl = [
//   //First image url
//   {
//     url: "https://github.com/PLAYDATA-GOOD-PLACE/FE-Good-Place/assets/87232411/f029942a-27a4-4121-a0bc-4cc3320ad1bb",
//   },
//   {
//     url: "https://github.com/PLAYDATA-GOOD-PLACE/FE-Good-Place/assets/87232411/f029942a-27a4-4121-a0bc-4cc3320ad1bb",
//   },
//   //Second image url
//   {
//     url: "https://github.com/PLAYDATA-GOOD-PLACE/FE-Good-Place/assets/87232411/f029942a-27a4-4121-a0bc-4cc3320ad1bb",
//   },
//   //Third image url
//   {
//     url: "https://github.com/PLAYDATA-GOOD-PLACE/FE-Good-Place/assets/87232411/f029942a-27a4-4121-a0bc-4cc3320ad1bb",
//   },
//
//   //Fourth image url
//
//   {
//     url: "https://github.com/PLAYDATA-GOOD-PLACE/FE-Good-Place/assets/87232411/f029942a-27a4-4121-a0bc-4cc3320ad1bb",
//   },
// ];

const Slider = () => {
  const { placeId } = useParams();
  const [sliderImageUrl, setSliderImageUrl] = useState([]);
  useEffect(() => {
    // Reference to the Firebase storage bucket
    const storage = getStorage();
    const storageRef = ref(storage, "/" + placeId);

    const fetchImageUrls = async () => {
      try {
        const imageRefs = await listAll(storageRef);
        const urls = await Promise.all(
          imageRefs.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { url };
          }),
        );
        setSliderImageUrl(urls);
      } catch (error) {
        console.error("Error fetching image URLs from Firebase:", error);
      }
    };

    fetchImageUrls();
  }, [placeId]);
  return (
    <>
      <div
        className="parent"
        style={{ width: "90%", margin: "auto"}}
      >
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="movie" />
              </div>
            );
          })}
        </Carousel>
        <Information placeId={placeId} />
        <DetailReview ></DetailReview>
        {/*<DetailComment></DetailComment>*/}
        {/*<DetailCommentInput></DetailCommentInput>*/}
      </div>
    </>
  );
};
export default Slider;
