
const MyFooter = () => {


    return <>
        <footer className="footer_container">
            <div className="footer_wrap">
                <img className="frame" src="/images/frame.svg" alt="social-media"></img>
                <p className="footer_text_1">
                    2023 팀맛집 All Right Reserved
                </p>
                <div className="footer_text_wrap">
                    <p className="footer_text_2">Contact</p>
                    <p className="footer_text_2">Privacy</p>
                    <p className="footer_text_2">Terms</p>
                    <p className="footer_text_2">About</p>
                </div>
                <div>
                    <img src="/images/social-media.svg" alt="social-media"></img>
                </div>
            </div>
        </footer>
    </>
}
export default MyFooter;