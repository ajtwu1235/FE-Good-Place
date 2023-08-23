import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import Template from "../template/Template";

import Recommend from "../components/Recommend";
import Slider from "../components/Slider";

import Story from "../components/Story";

import Rectangle from "../components/Rectangle";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Rectangle />} />
        <Route
          path="/recommend"
          element={<Recommend places={myPlaces} setMyPlaces={setMyPlaces} />}
        />
        <Route path="/page_detail" element={<Slider places={myPlaces} />} />
        <Route path="/story" element={<Story />}></Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
