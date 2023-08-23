import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import Template from "../template/Template";
import KakaoLoginRedirect from "../components/user/KakaoLoginRedirect";
import MainStory from "../components/main/MainStory";
import ListPage from "../components/list/List";

import Recommend from "../components/recommned/Recommend";
import Slider from "../components/detail/Slider";

import Story from "../components/story/Story";

import MainRectangle from "../components/main/MainRectangle";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<MainRectangle />} />
        <Route
          path="/recommend"
          element={<Recommend places={myPlaces} setMyPlaces={setMyPlaces} />}
        />
        <Route path="/page_detail" element={<Slider places={myPlaces} />} />
        <Route path="/story" element={<Story />}></Route>
      </Route>
      <Route path="/redirect" element={<KakaoLoginRedirect />}></Route>
      <Route path="/list" element={<ListPage />}></Route>
      <Route path="/mainStory" element={<MainStory />}></Route>
    </Routes>
  );
};

export default MyRoutes;
