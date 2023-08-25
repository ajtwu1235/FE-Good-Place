function KakaoLoginRedirect() {
  localStorage.clear();

  console.log(window.location);

  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token"); // 'token' 파라미터 값
  const userId = searchParams.get("userId");
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
  console.log(userId);
  window.location.href = "/";
  return <></>;
}

export default KakaoLoginRedirect;
