
function Preview({cv}){

    const visibleExperience = cv.experience.filter(
        exp => exp.jobTitle || exp.company || exp.experience
    );

    const visibleEducation = cv.education.filter(
        edu => edu.qualification || edu.institution || edu.gradYear
    );

    const visibleTechSkills = cv.skills.technical.filter(Boolean);
    const visibleSoftSkills = cv.skills.soft.filter(Boolean);

    return(
        <>
            <div className="builder-preview">
                <h1>{cv.contact.fullName || "Your Name"}</h1>
                <div className="cv-contact">
                    <span>{cv.contact.phone || "Phone Number"}</span>
                    <span>{cv.contact.email || "email@example.com"}</span>
                    {cv.contact.linkedIn && <span>{cv.contact.linkedIn || "linkedin.com/in/yourname"}</span>}
                    {cv.contact.github && <span>{cv.contact.github || "username.github.io"}</span>}
                </div>
                
                <h3>Professional Summary</h3>
                <p>{cv.statement || "xxx"}</p>

                {visibleExperience.length > 0 &&(
                    <>
                        <h3>Experience</h3>
                        {visibleExperience.map((exp, index) => (
                            <div key={index} className="cv-item">
                                <div className="cv-item-header">
                                    <strong>{exp.jobTitle || "Job Title"}</strong>
                                    <span>{exp.startDate || "Start"} - {exp.endDate || "End"}</span>
                                </div> 
                                <div className="cv-itrm-sub">
                                    <p>{exp.company || "Company"}</p>
                                </div>
                                {exp.achievements && <p>{exp.achievements || "Achievements"}</p>}
                            </div>
                        ))}
                    </>
                )}

                {visibleEducation.length > 0 &&(
                    <>
                        <h3>Education</h3>
                        {visibleEducation.map((edu, index) => (
                            <div key={index}>
                                <div key={index} className="cv-item">
                                    <div className="cv-item-header">
                                        <strong>{edu.qualification || "Qualification"}</strong>
                                        <span>{edu.gradYear || "Graduation Year"}</span>
                                    </div>
                                </div>
                                <div className="cv-items-sub">
                                    <p>{edu.institution || "Institution"}</p>
                                </div>   
                            </div>
                        ))}
                    </>
                )}

                {(visibleTechSkills.length > 0 || visibleSoftSkills.length > 0) && (
                    <>
                        <h3>Skills</h3>

                        {visibleTechSkills.length > 0 &&(
                            <>
                                <h4>Technical Skills</h4>
                                <ul className="cv-skills">
                                    {visibleTechSkills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        
                        {visibleSoftSkills.length > 0 &&(
                            <>
                                <h4>Soft SKills</h4>
                                <ul className="cv-skills">
                                    {visibleSoftSkills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </>
                        )}  
                    </>
                )}
                
            </div>
        </>
    );
}

export default Preview;