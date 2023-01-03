import { Users } from "../../dummyData"
import Online from "../online/Online"
import "./rightbar.css"

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/birthday.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"> <b>Sanjay Sehra</b> and <b>3 other friends</b> have birthday today.</span>
                </div>
                <img src="/assets/ad.webp" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle" >Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Delhi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Rajasthan</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sohan Paradiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sohan Paradiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sohan Paradiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sohan Paradiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sohan Paradiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sohan Paradiya</span>
                    </div>
                </div>

            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
