import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { myAxios } from "../network/api";
import axios from "axios";

const RotatedDiv = ({ onClick }) => {
  return (
    <div
      style={{
        width: "285px",
        height: "380px",
        transform: "rotate(90deg)",
        borderRadius: "20px",
        background: "#D9D9D9",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 60px",
        cursor: "pointer", // Add cursor style to indicate it's clickable
      }}
      onClick={onClick} // Attach the click event
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="78"
        viewBox="0 0 78 78"
        fill="none"
      >
        <rect
          x="78"
          y="33.15"
          width="11.7"
          height="78"
          rx="5.85"
          transform="rotate(90 78 33.15)"
          fill="#A8A8A8"
        />
        <rect
          x="44.8496"
          y="78"
          width="11.7"
          height="78"
          rx="5.85"
          transform="rotate(-180 44.8496 78)"
          fill="#A8A8A8"
        />
      </svg>
    </div>
  );
};

const Recommend = ({ setMyPlaces }) => {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState("");
  const [placesArray, setPlacesArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Add state for current page
  const placesPerPage = 5; // Number of places to show per page
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const toggleSelectAll = () => {
    // If all places are already selected, clear selection. Otherwise, select all.
    if (selectedPlaces.length === currentPlaces.length) {
      setSelectedPlaces([]);
    } else {
      setSelectedPlaces(currentPlaces.map((place) => place.id));
    }
  };

  const isSelected = (placeId) => selectedPlaces.includes(placeId);

  const toggle = () => setModal(!modal);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await myAxios(
      "/v2/local/search/keyword.json?query=" + query,
      "GET",
    );

    console.log(response.body);

    if (response.status === "success") {
      const newPlacesArray = response.body.documents;
      setPlacesArray(newPlacesArray);
      setCurrentPage(1); // Reset current page to 1 when new data is fetched
    }
  };

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = placesArray.slice(indexOfFirstPlace, indexOfLastPlace);
  const sendSelectedPlacesToServer = async () => {
    try {
      const selectedData = placesArray.filter((place) =>
        selectedPlaces.includes(place.id),
      );

      const selectedPlaceIds = selectedData.map((place) => place.id);

      const response = await axios.post(
        "http://localhost:8080/api/v1/client/submit-selected-places",
        {
          selectedPlaceIds: selectedPlaceIds,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        console.log("Selected places sent to the server successfully.");
      }
    } catch (error) {
      console.error("Error sending selected places:", error);
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "339px",
          margin: "auto",
          background: "#F8F8F8",
        }}
      >
        <ul>
          <li
            style={{
              color: "#1E1E1E",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 200,
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "center",
              listStyleType: "none",
              paddingTop: "92px",
              paddingBottom: "27px",
            }}
          >
            Recommended restaurants
          </li>
          <li
            style={{
              color: "#000",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              textTransform: "uppercase",
              listStyleType: "none",
              textAlign: "center",
            }}
          >
            내가 가본 맛집 추천
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "center" }} className="place insert">
        {[1, 2, 3].map((item) => (
          <RotatedDiv key={item} onClick={toggle} />
        ))}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>식당 등록</ModalHeader>
        <ModalBody>
          <div style={{}}>
            <form className="d-flex" onSubmit={onSubmitHandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  width: "594px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(5px)",
                }}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, #CD1A40 0%, #FF803C 100%)",
                  boxShadow: "0px 5px 10px 0px rgba(205, 26, 64, 0.22)",
                  width: "86px",
                  height: "40px",
                  color: "white",
                  border: "none",
                }}
              >
                검색
              </button>
            </form>
          </div>
          <div>
            {/* Add a button to select all results */}
            <button
              onClick={toggleSelectAll}
              style={{
                margin: "10px 0",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#A8A8A8",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {selectedPlaces.length === currentPlaces.length
                ? "Deselect All"
                : "Select All"}
            </button>
          </div>
          <div>
            {/* Display search results */}
            {currentPlaces.map((place) => (
              <div
                key={place.id}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #D9D9D9",
                  cursor: "pointer",
                  backgroundColor: isSelected(place.id) ? "#F0F0F0" : "white", // Change background color if selected
                }}
                onClick={() => {
                  const updatedSelectedPlaces = isSelected(place.id)
                    ? selectedPlaces.filter((id) => id !== place.id)
                    : [...selectedPlaces, place.id];
                  setSelectedPlaces(updatedSelectedPlaces);
                }}
              >
                <h4>{place.place_name}</h4>
                <p>{place.address_name}</p>
                <p>{place.phone}</p>
                <a
                  href={place.place_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="text-center mt-3">
            <Pagination>
              <PaginationItem>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              {/* Render page numbers */}
              {[...Array(Math.ceil(placesArray.length / placesPerPage))].map(
                (_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink onClick={() => setCurrentPage(index + 1)}>
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
          </div>
          {/* Add a button to send selected places to the server */}
          <button
            onClick={sendSelectedPlacesToServer}
            style={{
              margin: "10px 0",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: "#CD1A40",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Selected Places to Server
          </button>
        </ModalBody>
        {/* ... (ModalFooter and other JSX components) */}
      </Modal>
    </>
  );
};
export default Recommend;
