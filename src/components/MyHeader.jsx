import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useEffect
import LoginModal from "./LoginModal";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const MyHeader = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nav = useNavigate();
  const token = localStorage.getItem("token"); // Get token from local storage
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    // Update isLoggedIn state based on token presence
    setIsLoggedIn(token !== null);
  }, [token]);

  const headerStyle = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
    margin: "auto",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container-fluid"
          style={{
            width: "100%",
            height: "54.742px",
            flex: "auto",
          }}
        >
          <Link className="navbar-brand" style={headerStyle} to="/">
            Good Place
          </Link>
          <div className="search" style={{ marginLeft: "105px" }}>
            <input className="input_search" placeholder="검색어 입력" />
            <button className="search_btn">
              <img
                className="search_img"
                src="/images/group-72.svg"
                alt={"search"}
              />
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item" style={headerStyle}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={headerStyle}>
                <Link className="nav-link story" to="/story">
                  Story
                </Link>
              </li>
              <li className="nav-item" style={headerStyle}>
                <Link className="nav-link list" to="/list">
                  List
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item" style={headerStyle}>
                    <Link className="nav-link list" to={`/recommend/${userId}`}>
                      {" "}
                      {/* Use userId in the link */}
                      Recommend
                    </Link>
                  </li>
                  <li className="nav-item userbtn" style={headerStyle}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link user">
                      {/* Logged in button */}
                      <Button
                        className="login_btn"
                        variant="primary"
                        onClick={() => nav("/logout")}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="66"
                          height="68"
                          viewBox="0 0 66 68"
                          fill="none"
                        >
                          <g filter="url(#filter0_d_272_221)">
                            <rect
                              x="10"
                              y="5"
                              width="46"
                              height="47.4839"
                              rx="14"
                              fill="url(#paint0_linear_272_221)"
                            />
                          </g>
                          <path
                            d="M37.8 28.1447C37.3858 28.1447 37.05 28.4805 37.05 28.8947C37.05 29.309 37.3858 29.6447 37.8 29.6447V28.1447ZM45 29.6447C45.4142 29.6447 45.75 29.309 45.75 28.8947C45.75 28.4805 45.4142 28.1447 45 28.1447V29.6447ZM33.45 22.8421C33.45 25.1083 31.6306 26.9342 29.4 26.9342V28.4342C32.4713 28.4342 34.95 25.9244 34.95 22.8421H33.45ZM29.4 26.9342C27.1694 26.9342 25.35 25.1083 25.35 22.8421H23.85C23.85 25.9244 26.3287 28.4342 29.4 28.4342V26.9342ZM25.35 22.8421C25.35 20.5759 27.1694 18.75 29.4 18.75V17.25C26.3287 17.25 23.85 19.7599 23.85 22.8421H25.35ZM29.4 18.75C31.6306 18.75 33.45 20.5759 33.45 22.8421H34.95C34.95 19.7599 32.4713 17.25 29.4 17.25V18.75ZM25.8 32.0658H33V30.5658H25.8V32.0658ZM33 40.25H25.8V41.75H33V40.25ZM25.8 40.25C23.5694 40.25 21.75 38.4241 21.75 36.1579H20.25C20.25 39.2401 22.7287 41.75 25.8 41.75V40.25ZM37.05 36.1579C37.05 38.4241 35.2306 40.25 33 40.25V41.75C36.0713 41.75 38.55 39.2401 38.55 36.1579H37.05ZM33 32.0658C35.2306 32.0658 37.05 33.8917 37.05 36.1579H38.55C38.55 33.0757 36.0713 30.5658 33 30.5658V32.0658ZM25.8 30.5658C22.7287 30.5658 20.25 33.0757 20.25 36.1579H21.75C21.75 33.8917 23.5694 32.0658 25.8 32.0658V30.5658ZM37.8 29.6447H45V28.1447H37.8V29.6447Z"
                            fill="#FAFAFA"
                          />
                          <defs>
                            <filter
                              id="filter0_d_272_221"
                              x="0"
                              y="0"
                              width="66"
                              height="67.4839"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="5" />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.803922 0 0 0 0 0.101961 0 0 0 0 0.25098 0 0 0 0.22 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_272_221"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_272_221"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_272_221"
                              x1="4.94"
                              y1="28.7419"
                              x2="60.37"
                              y2="28.7419"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#CD1A40" />
                              <stop offset="1" stop-color="#FF803C" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </Button>
                      <LoginModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </a>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <li className="nav-item userbtn" style={headerStyle}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="nav-link user">
                    {/* Not logged in button */}
                    <Button
                      className="login_btn"
                      variant="primary"
                      onClick={() => setModalShow(true)}
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <img
                        src="https://github.com/icebear2n2/FE-Good-Place/assets/87232411/528901ef-863d-48b8-a414-b6f714b8bbe7"
                        alt={"button"}
                      />
                    </Button>
                    <LoginModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyHeader;
