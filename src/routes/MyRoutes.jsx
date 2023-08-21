import { Routes, Route } from "react-router-dom";
import Place from "../components/Place";
import Places from "../components/Places";
import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Template from "../template/Template";
import Story from "../components/story/Story";
import List from "../components/List";
import Template2 from "../template/Template2";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route element={<Template2/>}>
        <Route
          path="/"
          element={<Place places={myPlaces} setMyPlaces={setMyPlaces} />}
        />
        </Route>
        <Route path="/place" element={<Places places={myPlaces} />} />
        <Route path="/story" element={<Story></Story>}></Route>
        <Route path="/list" element={<List></List>}></Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
