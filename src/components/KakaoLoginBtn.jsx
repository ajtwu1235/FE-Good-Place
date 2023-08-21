import axios from 'axios';
import React from 'react';


const KakaoLoginButton = () => {

  const handleKakaoLogin = async() => {
    // 카카오 로그인 URL 생성
    const kakaoLoginUrl = 'http://localhost:8080/oauth2/authorization/kakao';

    // 사용자 브라우저 리다이렉션
    window.location.href = kakaoLoginUrl
    
    window.location.href='http://localhost:8080/token'

    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token'); // 'token' 파라미터 값


    localStorage.setItem("token",token)
  
  };

  return (
    <button onClick={handleKakaoLogin}>Kakao 로그인</button>
  );
};

export default KakaoLoginButton;
