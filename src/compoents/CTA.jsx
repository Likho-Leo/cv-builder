
import { useNavigate } from "react-router-dom";

function CTA(){
    const navigate = useNavigate();
    return(
        <section className="cta">
            <h2>Ready to build your CV?</h2>
            <p>Create a professional CV in minutes. No sign-up required.</p>
            <button onClick={() => navigate("/builder")}>
                Start building
            </button>
        </section>
    );
}

export default CTA;