import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import Template from "../template/Template";
import KakaoLoginRedirect from "../components/KakaoLoginRedirect";
import MainStory from "../components/MainStory";
import ListPage from "../components/List";

import Recommend from "../components/Recommend";
import Slider from "../components/Slider";

import Story from "../components/Story";

import MainRectangle from "../components/MainRectangle";
import DetailReview from "../components/DetailReview";
import { useParams } from "react-router";
const RecommendWrapper = () => {
  const { userId } = useParams();
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch user-specific data using userId and update myPlaces
    // Example: const userPlaces = fetchUserPlacesFromAPI(userId);
    // setMyPlaces(userPlaces);
  }, [userId]);

  return <Recommend places={myPlaces} setMyPlaces={setMyPlaces} />;
};
const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<MainRectangle />} />
        <Route path="/recommend/:userId" element={<RecommendWrapper />} />
        <Route
          path="/page_detail/:placeId"
          element={<Slider places={myPlaces} component={DetailReview} />}
        />
        <Route path="/story" element={<Story />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/mainStory/:storeId" element={<MainStory />}></Route>
      </Route>
      <Route path="/redirect" element={<KakaoLoginRedirect />}></Route>
    </Routes>
  );
};

export default MyRoutes;
