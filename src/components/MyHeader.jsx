import { Link } from "react-router-dom";

const MyHeader = () => {
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
            width: "1225px",
            height: "54.742px",
            flex: "auto",
          }}
        >
          <Link className="navbar-brand" style={headerStyle} to="/">
            Good Place
          </Link>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/place"
                >
                  place
                </Link>
              </li>
              <li className="nav-item" style={headerStyle}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link className="nav-link about us" to="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item" style={headerStyle}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link user">
                  <img
                    src="https://github.com/icebear2n2/FE-Good-Place/assets/87232411/528901ef-863d-48b8-a414-b6f714b8bbe7"
                    alt={"img"}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyHeader;
