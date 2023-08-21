import { useNavigate } from "react-router";

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
            width: "100%",
            height: "54.742px",
            flex: "auto",
          }}
        >
          <a className="navbar-brand" href="#" style={headerStyle}>
            Good Place
          </a>

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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item" style={headerStyle}>
                <a className="nav-link about us" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item" style={headerStyle}>
                <a className="nav-link about us" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item" style={headerStyle}>
                <a className="nav-link about us" href="#">
                  List
                </a>
              </li>
              <li className="nav-item userbtn" style={headerStyle}>
                <a className="nav-link user">
                  <img src="https://github.com/icebear2n2/FE-Good-Place/assets/87232411/528901ef-863d-48b8-a414-b6f714b8bbe7" />
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
