import "./detail.css";
import axios from "axios";
import {useEffect, useState} from "react";
const DetailReview = () => {
  const [data,setData] = useState([]);

  const getData =()=>axios.get(`http://localhost:8080/api/v1/reviews/`)
      .then(response =>{
        console.log(response.data)
        setData(response.data.content)
      })
        const token = localStorage.getItem('token')


    useEffect(() => {
      getData()
    }, [])

    console.log(data)

  return (
    <>
      <div className="detail_container">
        <hr className="detail_line"></hr>
        <p className="review_title">Review</p>
        <div className="review_wrap">
          <div className="review_profile">
            <img src="/images/profile-1.png" alt=""></img>
            <p className="review_text">김지혜</p>
          </div>
          <div className="review_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            maxime, non ullam modi repudiandae est quod asperiores ad rerum
            aliquam consectetur, dolore praesentium quisquam. Eum fugit porro
            eos tempore eaque?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas maxime, non ullam modi repudiandae est quod asperiores ad
            rerum aliquam consectetur, dolore praesentium quisquam. Eum fugit
            porro eos tempore eaque?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas maxime, non ullam modi repudiandae est quod
            asperiores ad rerum aliquam consectetur, dolore praesentium
            quisquam. Eum fugit porro eos tempore eaque?
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailReview;
