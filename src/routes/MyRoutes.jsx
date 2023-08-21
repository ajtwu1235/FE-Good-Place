import { Routes, Route } from "react-router-dom";
import Places from "../components/Places";
import { useState } from "react";
import Template from "../template/Template";
import Rectangle from "../components/Rectangle";

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
      </Route>
    </Routes>
  );
};

export default MyRoutes;
