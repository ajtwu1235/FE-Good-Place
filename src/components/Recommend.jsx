const RotatedDiv = () => {
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
      }}
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

const Recommend = () => {
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
          <RotatedDiv key={item} />
        ))}
      </div>
    </>
  );
};
export default Recommend;
