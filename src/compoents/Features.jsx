import FeatureCard from "./FeatureCard";

/**
 * Landing page section showcasing key product features
 */
function Features(){
    return(
        <section className="features">
            <FeatureCard
                image="/images/live-preview.png"
                title="Live preview as you type"
                description="Enter your details and see your CV update instantlty. No guessing how it will look."
            />

            <FeatureCard
                image="/images/ast-friendly.png"
                title="ATS-friendly CVs"
                description="Template is structured to pass applicant tracking system so your CV actually gets seen."
                reverse
            />

            <FeatureCard
                image="/images/one-click_pdf.png"
                title="Download your CV as a PDF."
                description="Export a clean, print-ready PDF in one click. No formatting breaks."
            />

            <FeatureCard
                image="/images/simple_fast.png"
                title="Built to be fast and simple."
                description="No accounts. no learning curve. Just fill in your details and get a solid CV in minutes."
                reverse
            />
        </section>
    );
}

export default Features;