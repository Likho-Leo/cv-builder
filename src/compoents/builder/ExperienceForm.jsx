import AddButton from "../buttons/AddButton";
import RemoveButton from "../buttons/RemoveButtons";

function ExperienceForm({ cv, setCv }) {
    return (
      <>
        <section className="cv-section">
          <h2>Experience</h2>
  
        {cv.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <input
              type="text"
              placeholder="Job title"
              value={exp.jobTitle}
              onChange={e =>
                setCv(prev => {
                  const updated = [...prev.experience];
                  updated[index].jobTitle = e.target.value;
                  return { ...prev, experience: updated };
                })
              }
            />
  
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={e =>
                setCv(prev => {
                  const updated = [...prev.experience];
                  updated[index].company = e.target.value;
                  return { ...prev, experience: updated };
                })
              }
            />
  
            <input
              type="date"
              value={exp.startDate}
              onChange={e =>
                setCv(prev => {
                  const updated = [...prev.experience];
                  updated[index].startDate = e.target.value;
                  return { ...prev, experience: updated };
                })
              }
            />
  
            <input
              type="date"
              value={exp.endDate}
              onChange={e =>
                setCv(prev => {
                  const updated = [...prev.experience];
                  updated[index].endDate = e.target.value;
                  return { ...prev, experience: updated };
                })
              }
            />
  
            <input
              type="text"
              placeholder="Achievements"
              value={exp.achievements}
              onChange={e =>
                setCv(prev => {
                  const updated = [...prev.experience];
                  updated[index].achievements = e.target.value;
                  return { ...prev, experience: updated };
                })
              }
            />
  
            <RemoveButton
              onClick={() =>
                setCv(prev => ({
                  ...prev,
                  experience: prev.experience.filter((_, i) => i !== index),
                }))
              }
            />
          </div>
        ))}
  
        <AddButton
            label = " Experience"
            onClick={() =>
                setCv(prev => ({
                ...prev,
                experience: [
                    ...prev.experience,
                    {
                    jobTitle: "",
                    company: "",
                    startDate: "",
                    endDate: "",
                    achievements: "",
                },
              ],
            }))
          }
        />
        </section>
      </>
    );
  }
  
  export default ExperienceForm;
  