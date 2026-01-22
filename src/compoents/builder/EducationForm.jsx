import AddButton from "../buttons/AddButton";
import RemoveButton from "../buttons/RemoveButtons";

function EducationForm({cv,setCv}){

  const today = new Date().toISOString().slice(0, 7);

  const isFutureDate = (value) => {
    if(!value) return false;
    return value > today;
  };

  const updateEducation = (index, field, value) => {
    setCv(prev => {
        const updated = [...prev.education];
        const edu = { ...updated[index], [field]: value};

        if(edu.completed && isFutureDate(edu.gradYear)) {
            alert("Completed qualication cannot have a future graduation date");
            return prev;
        }

        updated[index] = edu;
        return {...prev, education: updated};
    });
  };

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
                           updateEducation(index, "qualification", e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) => 
                            updateEducation(index, "institution", e.target.value)
                        }
                    />

                    <input
                        type={"month"}
                        value={edu.gradYear}
                        max={edu.completed ? today : undefined}
                        onChange={(e) =>
                            updateEducation(index, "gradYear", e.target.value)
                        }
                    />

                    <label>
                        <input
                        type ="checkbox"
                        checked ={edu.completed}
                        onChange={(e) =>
                            updateEducation(index, "completed", e.target.checked)
                        }
                        />
                        Completed
                    </label>

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