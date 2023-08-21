import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { springApi } from '../../network/springApi';
import axios from 'axios';
import KakaoLoginButton from '../KakaoLoginBtn';

const LoginModal=(props)=>{

    const params = {
        response_type: 'code',
        client_id: "22ac53a08edfe311aa62c57173849aca",
        redirect_uri: 'http://localhost:5000/callback/kakao',
    }

    axios.get('https://kauth.kakao.com/oauth/authorize', { params })
    .then(response => {
      // 여기서 필요한 작업을 수행
      console.log(response.data); // 예시로 응답 데이터 출력
    })
    .catch(error => {
      console.error('Kakao login error:', error);
    });

    const [data,setData] = useState("")

    const getData = async()=>{
        const response = await axios.get(
            "https://kauth.kakao.com/oauth/authorize",
            {},
            { headers: { "Content-Type": "application/json" } },
          );

          console.log(response)
    }


    const LoginStyle = {
        margin: '93px 41px',
       
    }

    const kakaoBtn ={
        width: '302px',
        height: '71px',
        flexShrink: '0',
        borderRadius: '50px',
        background: '#FEF01B',
        border : 'none'
        
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: '400px', // 원하는 최대 너비로 설정
        height: '500px', // 원하는 최대 높이로 설정
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%' , 
        left : '50%',
        transform:'translate(-50%,-50%)',
        overflow: 'hidden'
   
      }}
      
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          로그인
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div style={LoginStyle}>
        <h4>로그인</h4>
        <p>
          로그인을 하면 맛집을 추천 할 수 있어요<br/>
          로그인해서 맛집을 알려주세요<br/>
          찡긋 찡긋 
        </p>
        <div>
         <img src='C:\Users\playdata\gitRepo\FE-Good-Place\public\images\kakao-1.jpg'/>
         <KakaoLoginButton/>
        </div>
        
         </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default LoginModal