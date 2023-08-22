import './main.css'

const MainTeam = () => {
    return <>
        <div className="main_container">
            <p className="main_title">WHO'S ON OUR TEAM ?</p>
            <div className="team_wrap">
                <div className="teamBox">
                    <p className="team_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fugiat vero
                        ex mollitia laborum ipsum nesciunt atque ratione ab odio, vel nisi deserunt dolor nostrum
                        praesentium voluptatibus quod adipisci qui!</p>
                    <div className="team_box">
                        <div className="team_person">
                            <img src="/images/team1.svg" alt=""></img>
                                <p className="team_name">김지혜</p>
                        </div>
                        <div className="team_person">
                            <img src="/images/team1.svg" alt=""></img>
                                <p className="team_name">김지혜</p>
                        </div>
                        <div className="team_person">
                            <img src="/images/team1.svg" alt=""></img>
                                <p className="team_name">김지혜</p>
                        </div>
                    </div>
                </div>
                <img className="team_big_img" src="/images/team1.svg" alt=""></img>
            </div>
        </div>
    </>

}
export default MainTeam