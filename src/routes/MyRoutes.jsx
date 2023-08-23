import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import Template from "../template/Template";
import KakaoLoginRedirect from "../components/KakaoLoginRedirect";
import MainStory from "../components/MainStory";
import ListPage from "../components/List";

import Recommend from "../components/Recommend";
import Slider from "../components/Slider";

import Story from "../components/Story";

import MainRectangle from "../components/MainRectangle";

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
        <Route path="/list" element={<ListPage />}></Route>
      <Route path="/mainStory" element={<MainStory />}></Route>
      </Route>
      <Route path="/redirect" element={<KakaoLoginRedirect />}></Route>
   
    </Routes>
  );
};

export default MyRoutes;
