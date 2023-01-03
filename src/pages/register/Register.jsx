import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Vikisocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Vikisocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="username" className="loginInput" />
                        <input placeholder="email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <input placeholder="password again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
