import AddButton from "../buttons/AddButton";
import RemoveButton from "../buttons/RemoveButtons";

function ExperienceForm({ cv, setCv }) {

  const isFutureDate = (value) => {
    if(!value) return false;
    const inputDate = new Date (value);
    const today = new Date();
    today.setHours(0,0,0,0);
    return inputDate > today;
  };

  const isStartAfterEnd = (start, end) => {
    if (!start || !end) return false;
    return new Date(start) > new Date(end);
  };

  const handleDateChange = (index, field, value) => {
    setCv(prev => {
      const updated = [...prev.experience];
      const exp = {...updated[index], [field]: value};

      //no future dates
      if(isFutureDate(value)) {
        alert("Future dates are not allowed");
        return prev;
      }

      //start<=end
      if(isStartAfterEnd(exp.startDate, exp.endDate)) {
        alert("STart date cannot be after end date");
        return prev;
      }

      updated[index] = exp;
      return {...prev, experience: updated};
    });
  };
  
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
              type="month"
              max = {new Date().toISOString().slice(0, 7)}
              value={exp.startDate}
              onChange={e =>
                handleDateChange(index, "startDate", e.target.value)
              }
            />
  
            <input
              type="month"
              max = {new Date().toISOString().slice(0, 7)}
              value={exp.endDate}
              onChange={e =>
               handleDateChange(index, "endDate", e.target.value)
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
  