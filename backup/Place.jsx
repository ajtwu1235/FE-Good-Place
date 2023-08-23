import React, { useState } from "react";
import { Alert, Input, Spinner } from "reactstrap";
import { myAxios } from "../src/network/api";
import { useNavigate } from "react-router-dom";
import Rectangle from "./Rectangle";

const Place = ({ setMyPlaces }) => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const response = await myAxios(
      "/v2/local/search/keyword.json?query=" + query,
      "GET",
    );
    setStatus(response.status);
    console.log(response.body);

    if (response.status === "success") {
      const placesArray = response.body.documents;
      setMyPlaces(placesArray);
      navigate("/place");
    }
  };

  return (
    <>
      {status === "loading" && <Spinner />}
      {status === "success" && <Alert color="success">성공</Alert>}
      {status === "error" && <Alert color="danger">실패</Alert>}
      <form onSubmit={onSubmitHandler}>
        <Input placeholder="name" onChange={(e) => setQuery(e.target.value)} />
        <Input type="submit" />
      </form>
    </>
  );
};

export default Place;
