import React, { useEffect, useState } from "react";
import "./List.css";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
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

const Recommend = ({ setMyPlaces, places }) => {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState("");
  const [placesArray, setPlacesArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 3;
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [reviews, setReviews] = useState("");
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const storage = getStorage();
  const isSelected = (place) => selectedPlaces.includes(place);

  const toggle = () => {
    setModal(!modal);
    if (modal) {
      // Refresh the page if the modal is being closed
      window.location.reload();
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await myAxios(
      "https://dapi.kakao.com/v2/local/search/keyword.json?query=" + query,
      "GET",
    );

    console.log(response.body);

    if (response.status === "success") {
      const newPlacesArray = response.body.documents;
      setPlacesArray(newPlacesArray);
      setCurrentPage(1);
      setMyPlaces(newPlacesArray);
    }
  };

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = placesArray.slice(indexOfFirstPlace, indexOfLastPlace);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const selectedPlacesData = JSON.stringify(selectedPlaces);
      const params = new URLSearchParams();
      params.append("selectedPlacesData", selectedPlacesData);
      params.append("reviews", reviews);

      const formData = new FormData();

      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]);
        formData.append("nameFiles", file[i].name); // Add corresponding file names
      }

      // Add other form data fields
      formData.append("placeId", selectedPlaces[0].id);

      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/v1/recommend/submit-selected-places",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: params,
        },
      );

      if (response.status === 200) {
        setSuccessMessage("Selected places submitted successfully.");
        toast.success("Selected places submitted successfully.");
        setReviews("");
      }
    } catch (error) {
      setErrorMessage("Failed to submit selected places.");
      toast.error("Failed to submit selected places.");
    }
  };
  const userId = localStorage.getItem("userId");
  const getData = () =>
    axios
      .get("http://localhost:8080/api/v1/recommend/" + userId)
      .then((response) => {
        console.log(response.data);
        const storeDataArray = response.data.map((item) => item.storeDto); // Use storeDto instead of store
        setData(storeDataArray);
        console.log("set data : ", storeDataArray);
      });

  const getImageUrls = async () => {
    try {
      const urls = await Promise.all(
        data.map(async (el) => {
          const imageRef = ref(storage, `${el.placeId}`);
          const imageList = await list(imageRef);

          if (imageList.items.length > 0) {
            const firstImageRef = imageList.items[0];
            const url = await getDownloadURL(firstImageRef);
            return url;
          }

          return null;
        }),
      );
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching image URLs from Firebase:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getImageUrls(); // Fetch image URLs after data is fetched
  }, [data]); // Trigger fetching image URLs whenever data changes

  console.log(data);
  console.log(imageUrls);
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
        <RotatedDiv onClick={toggle} />
      </div>
      <div
        className="flexRow"
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        {data.map((store, index) => (
          <div key={store.id}>
            <p className="titleStyle">{store.address}</p>
            <p className="subTitleStyle">{store.name}</p>
            <a href={`/page_detail/${store.placeId}`}>
              <img
                style={{ borderRadius: "10px" }}
                src={imageUrls[index]}
                alt="sunflower"
                width="499px"
                height="450px"
              />
            </a>
          </div>
        ))}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>식당 등록</ModalHeader>
        <ModalBody>
          <ToastContainer />
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
                  height: "27px",
                  color: "white",
                  border: "none",
                }}
              >
                검색
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              {/* Display search results */}
              {currentPlaces.map((place) => (
                <div
                  key={place.id}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #D9D9D9",
                    cursor: "pointer",
                    backgroundColor: isSelected(place) ? "gray" : "white", // Change background color if selected
                  }}
                  onClick={() => {
                    setSelectedPlaces([place]); // Set the selected place as the only item in the array
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

              <div
                className="reviews"
                contentEditable="true"
                // className="form-control me-2"
                placeholder="reviews"
                aria-label="reviews"
                style={{
                  marginTop: "10px",
                  width: "466.758px",
                  height: "172px",
                  borderRadius: "10px",
                  border: "1px solid #D9D9D9",
                  background: "#FFF",
                  wordWrap: "break-word",
                }}
                onBlur={(e) => setReviews(e.target.innerText)} // Corrected placement of onBlur event
              ></div>
              <input
                className="file_button"
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files)} // Handle file selection
                multiple
              />
              {/* Add a button to send selected places to the server */}
              <div
                style={{
                  textAlign: "center",
                  margin: "auto",
                  marginTop: "10px",
                }}
              >
                <button
                  style={{
                    width: "200px",
                    height: "30px",
                    padding: "8px 0",
                    background:
                      "linear-gradient(90deg, #CD1A40 0%, #FF803C 100%)",
                    borderRadius: "8px",
                    color: "#FFF",
                    textTransform: "uppercase",
                    border: "none",
                    boxShadow: "0px 5px 10px 0px rgba(205, 26, 64, 0.22)",
                  }}
                >
                  Recommended
                </button>
              </div>
            </form>
          </div>
          {/* Pagination */}
          <div className="d-flex justify-content-center mt-3">
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
        </ModalBody>
        {/* ... (ModalFooter and other JSX components) */}
      </Modal>
    </>
  );
};
export default Recommend;
