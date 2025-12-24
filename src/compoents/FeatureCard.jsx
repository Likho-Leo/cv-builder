
/**
 * Display a single feature with image, title and description.
 * Layout can be reversed creating an alternating left/right pattern.
 */

function FeatureCard({image, title, description, reverse = false}){
    return(
        <div className={`feature ${reverse ? "reverse" : ""}`}>
            {/*Feature illustration*/}
            <div className="feature-image">
                <img src={image} alt={title}/>
            </div>
        
            {/*Feature text content */}
            <div className="feature-content">
                <h3>{title}</h3>
                <p>{description}</p>       
            </div>
        </div>
    );
}

export default FeatureCard;