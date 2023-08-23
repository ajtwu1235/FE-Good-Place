
function KakaoLoginRedirect() {
    localStorage.clear();


    console.log(window.location)

    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token'); // 'token' 파라미터 값
    localStorage.setItem("token",token)


    window.location.href="/"
  return <></>;
}

export default KakaoLoginRedirect;