import { Routes, Route } from "react-router-dom";
import Place from "../components/Place";
import Places from "../components/Places";
import { useState } from "react";
import MyHeader from "../components/MyHeader";
import Template from "../template/Template";
import KakaoLoginRedirect from "../components/KakaoLoginRedirect";
import MainStory from "../components/MainStory/MainStory";
import ListPage from "../components/ListPage/List";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route
          path="/"
          element={<Place places={myPlaces} setMyPlaces={setMyPlaces} />}
        />
        <Route path="/place" element={<Places places={myPlaces} />} />
       
      </Route>
      <Route path="/redirect" element={<KakaoLoginRedirect/>}></Route>
      <Route path="/list" element={<ListPage/>}></Route>
      <Route path="/mainStory" element={<MainStory/>}></Route>
    </Routes>
  );
};

export default MyRoutes;
