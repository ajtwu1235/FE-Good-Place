import { Routes, Route } from "react-router-dom";
import Places from "../components/Places";
import { useState } from "react";
import Template from "../template/Template";
import Rectangle from "../components/Rectangle";
import Recommend from "../components/Recommend";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route
          path="/"
          element={<Rectangle places={myPlaces} setMyPlaces={setMyPlaces} />}
        />
        <Route path="/place" element={<Places places={myPlaces} />} />
        <Route path="/recommend" element={<Recommend />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
