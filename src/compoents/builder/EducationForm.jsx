import AddButton from "../buttons/AddButton";
import RemoveButton from "../buttons/RemoveButtons";

function EducationForm({cv,setCv}){
    return(
        <>
            <section className="cv-section">
                <h2>Education</h2>

                {cv.education.map((edu, index) =>(
                <div key={index} className ="edication-item">
                    <input
                        type="text"
                        placeholder="Qualification"
                        value={edu.qualification}
                        onChange={(e) => 
                            setCv(prev => {
                                const updated = [...prev.education];
                                updated[index].qualification = e.target.value;
                                return {...prev, education: updated};
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) => 
                            setCv(prev => {
                                const updated = [...prev.education];
                                updated[index].institution = e.target.value;
                                return {...prev,education: updated};
                            })
                        }
                    />

                    <input
                        type={"Date"}
                        value={edu.gradYear}
                        onChange={(e) =>
                            setCv(prev => {
                                const updated = [...prev.education];
                                updated[index].gradYear = e.target.value;
                                return {...prev, education: updated};
                            })
                        }
                    />

                    <RemoveButton
                        onClick={()=>
                            setCv(prev => ({
                                ...prev,
                                education: prev.education.filter((_, i) => i !== index),
                            }))
                        }    
                    />
                </div>
            ))}
            <AddButton
                label=" Education"
                onClick ={() => 
                    setCv(prev => ({
                        ...prev,
                        education: [
                            ...prev.education,
                            {
                                qualification: "",
                                institution: "",
                                gradYear: "",
                            },
                        ],
                    }))
                }
            />
            </section>
        </>
    );
}

export default EducationForm;