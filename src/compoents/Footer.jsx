
function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    {/*<h3>CV Builder</h3>*/}
                    <img src="/images/cv-builder_logo.png" alt="CV Builder"/>
                    <p>Build your own professional CV in minutes</p>
                </div>

                <div className="footer-links">
                    <h4>Features</h4>
                    <ul>
                        <li>Live Preview</li>
                        <li>ATS-Friendly</li>
                        <li>One-Click PDF</li>
                        <li>Fast & Simple</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Socials</h4>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Email</li>
                        <li>Phone</li>
                        <li>WhatsApp</li>
                        <li>Discord</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;