import { myAxios } from "../network/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Rectangle = ({ setMyPlaces }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // setStatus("loading");

    const response = await myAxios(
      "/v2/local/search/keyword.json?query=" + query,
      "GET",
    );

    console.log(response.body);

    if (response.status === "success") {
      const placesArray = response.body.documents;
      setMyPlaces(placesArray);
      navigate("/place");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "768px",
        margin: "auto",
        backgroundImage:
          "url(https://github.com/icebear2n2/FE-Good-Place/assets/87232411/c3a4ce55-c2f1-4c62-83a3-45036899be60)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ul>
        <li
          style={{
            color: "#FFF",
            fontSize: "86px",
            fontStyle: "normal",
            fontWeight: 700,
            paddingTop: "218px",
            lineHeight: "normal" /* 75% */,
            marginBottom: "36px",
            paddingLeft: "92px",
          }}
        >
          Let’s Eat Now
        </li>
        <li
          style={{
            display: "flex",
            width: "573px",
            height: "41px",
            flexDirection: "column",
            justifyContent: "center",
            color: "#FFF",
            textAlign: "center",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal" /* 75% */,
            margin: "58px 0",
          }}
        >
          내가 추천한 맛집, 솔직한 리뷰
        </li>
        <form className="d-flex" onSubmit={onSubmitHandler}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              width: "580px",
              height: "65px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(5px)",
              marginLeft: "92px",
            }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{
              borderRadius: "18px",
              background: "linear-gradient(90deg, #CD1A40 0%, #FF803C 100%)",
              boxShadow: "0px 5px 10px 0px rgba(205, 26, 64, 0.22)",
              width: "65px",
              height: "65px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </ul>
    </div>
  );
};
export default Rectangle;
