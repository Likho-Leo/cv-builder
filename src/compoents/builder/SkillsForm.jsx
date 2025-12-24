import RemoveButton from "../buttons/RemoveButtons";
import AddButton from "../buttons/AddButton";

function SkillsForm({cv,setCv}){
    const handleChange = (type, index, value) => {
        setCv(prev => {
            const updated = [...prev.skills[type]];
            updated[index] = value;
            return{
                ...prev,
                skills: {
                    ...prev.skills,
                    [type]: updated,
                },
            };
        });
    };

    const addSkill = (type) => {
        console.log("Adding", type)
        setCv(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [type]: [...prev.skills[type], ""],
            },
        }));
    };

    const removeSkill = (type, index) => {
        setCv(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [type]: prev.skills[type].filter((_, i) => i !== index),
            },
        }));
    };

    return(
        <>
           <section className="cv-section">
             <h2>Skills</h2>
            <h4>Technical Skills</h4>
            {cv.skills.technical.map((skill, index) => (
                <div key={index} className="technicalSkill-item">
                    <input
                        type="text"
                        placeholder="Technical skills"
                        value={skill}
                        onChange={(e) => 
                        handleChange("technical", index, e.target.value)
                        }
                    />
                    <RemoveButton onClick={() => removeSkill("technical", index)}/>
                </div>
            ))}
            <AddButton label = " Skill" onClick={() => addSkill("technical")}/>
            
            <h4>Soft Skills</h4>
            {cv.skills.soft.map((skill, index) => (
                <div key={index} className="softSkill-item">
                    <input
                        type="text"
                        placeholder="Soft skills"
                        value={skill}
                        onChange={(e) => 
                            handleChange("soft", index, e.target.value)
                        }
                    />
                    <RemoveButton onClick={() => removeSkill("soft", index)}/>
                </div>
            ))}
            <AddButton label = " Skill" onClick={() => addSkill("soft")}/>
           </section>
        </>
    );
}

export default SkillsForm;