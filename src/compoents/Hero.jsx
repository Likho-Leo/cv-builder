
import {useNavigate} from "react-router-dom";

function Hero(){
    const navigate = useNavigate();

    return(
        <section className="hero">
            <h1>Build a professional CV in minutes</h1>

            <p>No accounts. No formatting. Just a solid CV.</p>

            <button className="hero-btn" onClick={() => navigate("/builder")}>
                Creat my CV
            </button>
        </section>
    );
}

export default Hero;