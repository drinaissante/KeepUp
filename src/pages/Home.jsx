    import NavBar from "../components/NavBar.jsx"

    import logo from "../assets/logo.svg"

    import '../styles/Home.css'

    function Home() {
        return (
            <>
                <NavBar />

                <div className="background" />
                
                <div className="main-content">
                    <h1 className="header">Keep Up Monitoring System</h1>

                    <img src={logo} className="main-logo" draggable="false" />

                    <h1>KU PORTAL</h1>

                    <h1 className="tagline">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa velit, fringilla molestie elementum ac
                    </h1>

                    <div className="buttons">
                        <button className="register-btn">
                            REGISTER
                        </button>

                        <button className="login-btn">
                            LOG IN
                        </button>
                    </div>
                </div>
            </>
        )
    }

    export default Home