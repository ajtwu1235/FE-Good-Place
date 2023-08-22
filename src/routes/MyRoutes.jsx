import { Routes, Route } from "react-router-dom";
import Place from "../components/Place";
import Places from "../components/Places";
import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Template from "../template/Template";
import Story from "../components/story/Story";

import Rectangle from "../components/Rectangle";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (

      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Rectangle />} />
          <Route path="/place" element={<Places places={myPlaces} />} />
          {/*<Route*/}
          {/*    path="/recommend"*/}
          {/*    element={<Recommend places={myPlaces} setMyPlaces={setMyPlaces} />}*/}
          {/*/>*/}
          {/*<Route path="/page_detail" element={<Slider places={myPlaces} />} />*/}
          <Route path='/story' element={<Story/>}></Route>
        </Route>
      </Routes>
  );
};

export default MyRoutes;
